import Link from "next/link";

interface UserProfile {
  name: string;
  email: string;
  bio: string;
}

export default function EditProfile() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          padding: "40px",
        }}
      >
        <div
          style={{
            marginBottom: "30px",
            display: "flex",
            flexDirection: "row",
            flex: "1",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "28px",
              marginBottom: "30px",
              color: "#333",
              textAlign: "center",
            }}
          >
            Edit Profile
          </h1>
          <Link href="/profile">
            <button
              style={{
                marginBottom: "20px",
                padding: "10px 20px",
                background: "#f0f0f0",
                border: "1px solid #ccc",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Kembali
            </button>
          </Link>
        </div>

        <div>
          <label
            style={{ display: "block", marginBottom: "8px", color: "#555" }}
          >
            Name
          </label>
          <input
            type="text"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              marginBottom: "20px",
            }}
          />
        </div>
        <div>
          <label
            style={{ display: "block", marginBottom: "8px", color: "#555" }}
          >
            Email
          </label>
          <input
            type="email"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              marginBottom: "20px",
            }}
          />
        </div>
        <div>
          <label
            style={{ display: "block", marginBottom: "8px", color: "#555" }}
          >
            Bio
          </label>
          <textarea
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              marginBottom: "20px",
            }}
            rows={4}
          ></textarea>
        </div>
        <button
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "6px",
            background: "#667eea",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
