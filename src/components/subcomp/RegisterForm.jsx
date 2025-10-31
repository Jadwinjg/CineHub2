// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import TopImg from "../../assets/images/cta-logo-one.png";
// import axios from "axios";
// import { useAuth } from "../../pages/AuthContext";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div className="min-h-screen w-full justify-center bg-login-bg bg-no-repeat bg-cover bg-top">
//       <div className="flex h-full flex-col w-[700px] px-[30px] text-center mx-auto pt-20">
//         <img className="px-6 w-full mb-4" src={TopImg} alt="top logo" />

//         <div className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         <p className="tracking-wider text-sm mb-2 text-white mt-4">
//           Already have an account?{" "}
//           <Link to="/login" className="underline text-blue-300">
//             Login here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
