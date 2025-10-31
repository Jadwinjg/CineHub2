// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/subcomp/Navbar";
// import Home from "./pages/Home";
// import Movies from "./pages/Movies";
// import Login from "./pages/Login";
// import PrivateRoute from "./pages/PrivateRoute";
// import Search from "./components/subcomp/Search";
// import Watchlist from "./components/subcomp/Watchlist";
// import Originals from "./components/subcomp/Originals";
// import Series from "./components/subcomp/Series";
// import Register from "./pages/Register";
// import VideoUploads from "./components/subcomp/videoUploads";
// import Upload from "./components/subcomp/videoUploads";
// import "./App.css";

// function App() {
//   return (
//     <BrowserRouter basename="/JADWIN/project1">
//       <div className="w-full overflow-x-hidden">
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route
//             path="/upload"
//             element={
//               <PrivateRoute>
//                 <div className="min-h-screen bg-black">
//                   <Navbar />
//                   <VideoUploads />
//                   <Upload/>
//                 </div>
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/"
//             element={
//               <PrivateRoute>
//                 <>
//                   <Navbar />
//                   <Home />
//                 </>
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/movies"
//             element={
//               <PrivateRoute>
//                 <>
//                   <Navbar />
//                   <Movies />
//                 </>
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/search"
//             element={
//               <PrivateRoute>
//                 <>
//                   <Navbar />
//                   <Search />
//                 </>
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/watchlist"
//             element={
//               <PrivateRoute>
//                 <>
//                   <Navbar />
//                   <Watchlist />
//                 </>
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/originals"
//             element={
//               <PrivateRoute>
//                 <>
//                   <Navbar />
//                   <Originals />
//                 </>
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/series"
//             element={
//               <PrivateRoute>
//                 <>
//                   <Navbar />
//                   <Series />
//                 </>
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

                                                                                            // Direct Home PAGE Version
  import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/subcomp/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Login from "./pages/Login";
import Search from "./components/subcomp/Search";
import Watchlist from "./components/subcomp/Watchlist";
import Originals from "./components/subcomp/Originals";
import Series from "./components/subcomp/Series";
import Register from "./pages/Register";
import VideoUploads from "./components/subcomp/videoUploads";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full overflow-x-hidden">
        <Routes>
          {/* Optional: keep login/register routes (for reference) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Direct public access routes */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <Navbar />
                <Movies />
              </>
            }
          />
          <Route
            path="/search"
            element={
              <>
                <Navbar />
                <Search />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <>
                <Navbar />
                <Watchlist />
              </>
            }
          />
          <Route
            path="/originals"
            element={
              <>
                <Navbar />
                <Originals />
              </>
            }
          />
          <Route
            path="/series"
            element={
              <>
                <Navbar />
                <Series />
              </>
            }
          />
          <Route
            path="/upload"
            element={
              <div className="min-h-screen bg-black">
                <Navbar />
                <VideoUploads />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
                                                                                          