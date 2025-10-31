import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import TopImg from "../assets/images/cta-logo-one.png";
import axios from "axios";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post("https://rssdinfotechoffice.store/JADWIN/backend/login.php", {
        email,
        password,
      });

      if (res.data.status === "Valid") {
        login(res.data.user); // Save user to context
        alert("Login successful!");
        console.log("Login successful");
        navigate("/");
      } else {
        alert(res.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full justify-center bg-login-bg bg-no-repeat bg-cover bg-top">
      <div className="flex h-full flex-col w-[700px] px-[30px] text-center mx-auto pt-20">
        <img className="px-6 w-full mb-4" src={TopImg} alt="top logo" />

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-md bg-white text-black border"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded-md bg-white text-black border"
            />
            <button
              type="submit"
              className="bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>

        <p className="tracking-wider text-sm mb-2 text-white">
          Don’t have an account?{" "}
          <Link to="/register" className="underline text-blue-300">
            Register here
          </Link>
        </p>

        <p className="tracking-wider text-sm text-white">
          Welcome to CineHub Clone! <br />
          Sign in to explore a world of entertainment. <br />
          Enjoy your favorite movies, shows, and more. <br />
          Let’s get started!
        </p>
      </div>
    </div>
  );
};

export default Login;
