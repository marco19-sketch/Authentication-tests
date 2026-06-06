// src/RegisterPage.jsx
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async e => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Firebase fa già il login automatico dopo la registrazione
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Registrati</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password (min. 6 caratteri)"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Crea account</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
