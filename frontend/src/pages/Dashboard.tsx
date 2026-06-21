import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";

import api from "../services/api";
import type { User } from "../types/user";

interface JwtPayload {
  id: number;
  iat: number;
  exp: number;
}

export default function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/");
          return;
        }

        const decoded = jwtDecode<JwtPayload>(token);
      

        const response = await api.get(`/api/users/${decoded.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data.data);
      } catch {
        localStorage.removeItem("token");

        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
      <h2>Dashboard</h2>

      <p>
        Welcome, <strong>{user?.username}</strong>
      </p>

      <p>{user?.email}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
