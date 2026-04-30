import {
  getFirestore,
  collection,
  updateDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcryptjs";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as any[];
    return data;
  } catch (error) {
    console.error("Error retrieving products: ", error);
    throw error;
  }
}

export async function retrieveProductById(collectionName: string, id: string) {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error retrieving product: ", error);
    throw error;
  }
}

export async function signIn(email: string) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as any[];

  if (data.length > 0) {
    return data[0];
  }
  return null;
}

export async function signUp(
  userData: {
    email: string;
    password: string;
    username: string;
    role?: string;
  },
  callback: (result: { status: boolean; message: string }) => void,
) {
  if (!userData.email || !userData.password) {
    return callback({
      status: false,
      message: "Email dan password wajib diisi",
    });
  }

  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email),
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as any[];

  if (data.length > 0) {
    callback({
      status: false,
      message: "Email sudah terdaftar",
    });
  } else {
    try {
      userData.password = await bcrypt.hash(userData.password, 10);
      userData.role = "member";

      await addDoc(collection(db, "users"), {
        ...userData,
        created_at: serverTimestamp(),
      });
      callback({
        status: true,
        message: "Berhasil mendaftar",
      });
    } catch (error) {
      callback({
        status: false,
        message: "Gagal mendaftar: " + (error as Error).message,
      });
    }
  }
}

export async function signInWithOAuth(userData: any, callback: any) {
  try {
    const q = query(
      collection(db, "users"),
      where("email", "==", userData.email),
    );
    const querySnapshot = await getDocs(q);
    const data: any = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (data.length > 0) {
      userData.role = data[0].role;
      await updateDoc(doc(db, "users", data[0].id), userData);
      callback({
        status: true,
        message: `User berhasil login dengan ${userData.type}`,
        data: userData
      });
    } else {
      userData.role = "member";
      await addDoc(collection(db, "users"), userData);
      callback({
        status: true,
        message: `User berhasil daftar dan login dengan ${userData.type}`,
        data: userData
      });
    }
  } catch (error) {
    callback({
      status: false,
      message: "Gagal login: " + (error as Error).message,
    });
  }
}
