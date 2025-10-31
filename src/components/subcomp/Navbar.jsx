import React from "react";
import { Link, useNavigate } from "react-router-dom";
import DisneyLogo from "../../assets/images/logo.png";
import {
  BsCameraVideo,
  BsFillTvFill,
  BsHouseDoorFill,
  BsPlusLg,
  BsSearch,
  BsStarFill,
} from "react-icons/bs";
import { useAuth } from "../../pages/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const NavItem = ({ children, onClick }) => (
    <div
      onClick={onClick}
      className="relative flex cursor-pointer items-center space-x-3 navitem-hover:w-full"
    >
      {children}
      <span className="absolute right-0 bottom-[-5px] left-[-12px] h-[3px] w-0 rounded-sm bg-white transition-all duration-150 ease-linear"></span>
    </div>
  );

  const handleLogout = () => {
    logout(); // clear user from context
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 w-full overflow-hidden bg-body-bg">
      <div className="w-full flex flex-wrap items-center justify-between px-2 sm:px-4 md:px-8 py-3">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex-shrink-0">
            <img
              className="w-20 sm:w-24 md:w-28 object-contain"
              src={DisneyLogo}
              alt="brand-logo"
            />
          </Link>

          {/* Nav items hidden on small screens */}
          <div className="hidden gap-10 xl:flex">
            <NavItem onClick={() => navigate("/")}>
              <BsHouseDoorFill className="w-7 h-7" />
              <p>Home</p>
            </NavItem>

            <NavItem onClick={() => navigate("/search")}>
              <BsSearch className="w-6 h-6" />
              <p>Search</p>
            </NavItem>

            <NavItem onClick={() => navigate("/watchlist")}>
              <BsPlusLg className="w-6 h-6" />
              <p>Watchlist</p>
            </NavItem>

            <NavItem onClick={() => navigate("/originals")}>
              <BsStarFill className="w-6 h-6" />
              <p>Originals</p>
            </NavItem>

            <NavItem onClick={() => navigate("/movies")}>
              <BsCameraVideo className="w-6 h-6" />
              <p>Movies</p>
            </NavItem>

            <NavItem onClick={() => navigate("/series")}>
              <BsFillTvFill className="w-6 h-6" />
              <p>Series</p>
            </NavItem>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {user && (
            <>
              <button
                onClick={() => navigate("/upload")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-300 ease-in-out"
              >
                Upload
              </button>

              <button
                onClick={handleLogout}
                className="transparent rounded border border-white bg-black bg-opacity-60 px-5 py-2 text-sm md:text-lg uppercase tracking-wider
                text-white transition-colors duration-200 ease-linear hover:bg-white hover:text-black"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
