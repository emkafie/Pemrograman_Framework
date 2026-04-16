import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, serverTimestamp } from "firebase/firestore";
import app from "./firebase";
import { getAuth } from "firebase/auth";
import bcrypt from "bcryptjs";

const db = getFirestore(app);
const auth = getAuth(app);

export async function retrieveProducts(collectionName: string) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
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

export async function signUp(
  userData: {
    email: string;
    password: string;
    username: string;
    role?: string;
  },
  callback: (result: { status: boolean; message: string }) => void
) {
  if (!userData.email || !userData.password) {
    return callback({
      status: false,
      message: "Email dan password wajib diisi",
    });
  }

  const q = query(collection(db, "users"), where("email", "==", userData.email));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

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

