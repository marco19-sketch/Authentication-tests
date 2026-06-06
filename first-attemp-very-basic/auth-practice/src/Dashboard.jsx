// src/Dashboard.jsx
import { useAuth } from "./useAuth";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function Dashboard() {
  const { user } = useAuth();

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
