import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  const [user, setUser] = useState("");
  const handleLogin = (email, password) => {
    if (email === "admin@123" && password === "1234") {
      setUser("admin");
    } else if (email === "customer@123" && password === "1234") {
      setUser("customer");
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Conditionally Render Home or AdminDashboard */}
        <Route
          path="/"
          element={
            user === "admin" ? <AdminDashboard /> : 
            user === "customer" ? <Home /> : 
            <Login handleLogin={handleLogin} />
          }
        />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route path="/success" element={<ProtectedRoute element={<Success />} />} />

        {/* Error Page for Unknown Routes */}
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
