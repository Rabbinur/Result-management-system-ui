import { Menu, X } from "lucide-react"; // icon library
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile_image from "../../assets/profile_image.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = JSON.parse(localStorage.getItem("auth"));
  const navigate = useNavigate();

  const navList = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About Us" },
  ];
  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <nav className="w-full px-4 py-2 bg-white z-[99999] relative">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto">
        {/* Logo */}
        <Link to="/" className="font-[Inspiration] text-3xl text-[#00E8BE]">
          Result
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7">
          {navList.map((item) => (
            <Link key={item.id} to={item.path} className="text-base">
              {item.name}
            </Link>
          ))}
          {!auth ? (
            <Link
              to="/login"
              className="bg-[#A9E8BA] py-2 px-6 rounded-full text-base"
            >
              Login
            </Link>
          ) : (
            <>
              <Link to="/dashboard" className="text-base">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-[#A9E8BA] py-2 px-6 rounded-full text-base"
              >
                Logout
              </button>
              <div
                className="w-[40px] h-[40px] rounded-full border border-[#00E8BE]"
                style={{
                  // backgroundImage: `url(https://images.unsplash.com/photo-1496345875659-11f7dd282d1d)`,
                  backgroundImage: `url(${profile_image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-[#00E8BE] transition-transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 z-[9999]
           ease-in-out ${isOpen ? "max-h-[400px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
          }`}
      >
        <div className="flex flex-col gap-4 py-2 text-center">
          {navList.map((item) => (
            <Link key={item.id} to={item.path} className="text-base">
              {item.name}
            </Link>
          ))}
          {!auth ? (
            <Link
              to="/login"
              className="inline-block bg-[#A9E8BA] py-2 px-6 rounded-full text-base"
            >
              Login
            </Link>
          ) : (
            <>
              <Link to="/dashboard" className="text-base">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="inline-block bg-[#A9E8BA] py-2 px-6 rounded-full text-base"
              >
                Logout
              </button>
              <div
                className="w-[40px] h-[40px] mx-auto rounded-full border border-[#00E8BE]"
                style={{
                  // backgroundImage: `url(https://images.unsplash.com/photo-1496345875659-11f7dd282d1d)`,
                  backgroundImage: `url(${profile_image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
