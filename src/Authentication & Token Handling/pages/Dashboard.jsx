import React from "react";
import { removeToken } from "../utils/token";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, you are logged in ✅</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
