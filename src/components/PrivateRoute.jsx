// src/components/PrivateRoute.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/login");
      } else {
        setIsAuth(true);
      }
      setLoading(false);
    });
  }, [navigate]);

  if (loading) return <div className="text-center mt-10">Chargement...</div>;
  return isAuth ? children : null;
}
