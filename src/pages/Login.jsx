// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-darkBlue text-white p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white text-darkBlue p-6 rounded shadow w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Connexion Admin</h1>
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full p-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-accent text-white w-full py-2 rounded hover:bg-blue-600 transition"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default Login;
