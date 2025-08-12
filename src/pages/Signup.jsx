import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === form.email)) {
      setError("Email already registered.");
      return;
    }
    users.push({
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      email: form.email,
      password: form.password,
    });
    localStorage.setItem("users", JSON.stringify(users));
    setError("");
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          className="border p-2 mb-2 w-full"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <input
          className="border p-2 mb-2 w-full"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          required
        />
        <input
          className="border p-2 mb-2 w-full"
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          className="border p-2 mb-2 w-full"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="border p-2 mb-2 w-full"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          className="border p-2 mb-2 w-full"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;