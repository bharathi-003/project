import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ mode = "login", userType = "patient" }) => {
  const [form, setForm] = useState({ email: "", password: "", name: "", phone: "", credentials: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert(`${mode} success!`);
    navigate("/dashboard");
  };

  return (
    <>
      <header>
        <h1>Healthcare Booking System</h1>
      </header>
      <form onSubmit={handleSubmit}>
        {mode === "register" && <input name="name" placeholder="Full Name" onChange={handleChange} required />}
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        {mode === "register" && userType === "doctor" && <input name="credentials" placeholder="Medical Credentials" onChange={handleChange} required />}
        <button type="submit">{mode === "login" ? "Login" : "Register"}</button>
      </form>
    </>
  );
};

export default AuthForm;
