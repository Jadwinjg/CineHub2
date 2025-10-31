import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import TopImg from "../assets/images/cta-logo-one.png";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields before sending
    if (!data.name || !data.email || !data.password) {
      alert("Please fill in all fields");
      return;
    }

    axios
      .post("https://rssdinfotechoffice.store/JADWIN/backend/insert.php", data)
      .then((result) => {
        const res = result.data;
        console.log("Server response:", res);

        if (res.status === "Invalid") {
          alert(res.message || "Registration failed");
        } else if (res.status === "Valid") {
          alert("Registration successful!");
          navigate("/Login");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Error connecting to server");
      });
  };

  return (
    <div className="min-h-screen w-full justify-center bg-login-bg bg-no-repeat bg-cover bg-top">
      <div className="flex h-full flex-col w-[700px] px-[30px] text-center mx-auto pt-20">
        <img className="px-6 w-full mb-4" src={TopImg} alt="top logo" />
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="p-3 rounded-md bg-white text-black border"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="p-3 rounded-md bg-white text-black border"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="p-3 rounded-md bg-white text-black border"
            />
            <button
              type="submit"
              className="bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition duration-200"
            >
              Register
            </button>
          </div>
        </form>

        <p className="tracking-wider text-sm mb-2 text-white mt-4">
          Already have an account?{" "}
          <Link to="/login" className="underline text-blue-300">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
