// src/App.jsx
import { useState } from 'react';
import RegisterPage from './RegisterPage';
import { useAuth } from "./useAuth";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

function App() {
  const { user } = useAuth();
  const [showRegister, setShowRegister] = useState(false);

  if (user) return <Dashboard />

  return (
    <div>
      {showRegister ? <RegisterPage /> : <LoginPage />}
      <button onClick={() => setShowRegister(!showRegister)}>
        {showRegister ? 'Hai già un account? Accedi' : 'Non hai un account? Registrati'}
      </button>
    </div>
  );
}

export default App;
