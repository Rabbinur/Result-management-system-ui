import { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoChevronBack } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import profile_image from "../../../assets/profile_image.png";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const semesters = [
    { id: 1, semester: "1st" },
    { id: 2, semester: "2nd" },
    { id: 3, semester: "3rd" },
    { id: 4, semester: "4th" },
    { id: 5, semester: "5th" },
    { id: 6, semester: "6th" },
    { id: 7, semester: "7th" },
    { id: 8, semester: "8th" },
  ];

  const { id, resultId } = useParams();
  const navigation = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigation("/");
  };

  const handleBack = () => {
    navigation(-1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results or filter data
      navigation(`/dashboard/search/${searchQuery}`);
      // Reset search field after search
      setSearchQuery("");
    }
  };

  return (
    <>
      <main className="pb-4">
        {/* Header */}
        <section className="grid grid-cols-12 shadow-md">
          <div className="py-4 col-span-2">
            <Link to={"/"}>
              <p className="font-[Inspiration] text-4xl text-center text-[#00E8BE]">
                Result
              </p>
            </Link>
          </div>
          <div className="col-span-10 flex items-center justify-between px-6">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <form onSubmit={handleSearch} className="relative">
                <div className={`flex items-center border-2 rounded-full overflow-hidden transition-all duration-200 ${isSearchFocused ? 'border-[#00E8BE] shadow-md' : 'border-slate-200'}`}>
                  <input
                    type="text"
                    placeholder="Search by student ID... REG2023001"
                    className="py-2 px-4 w-full outline-none text-slate-700"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#00E8BE] to-[#00BB35] text-white p-2 px-4 h-full flex items-center justify-center"
                  >
                    <FiSearch className="text-xl" />
                  </button>
                </div>
              </form>
            </div>

            {/* User Info - Optional */}
            <div className="hidden md:flex items-center gap-3">
              <div className="text-right">
                <p className="font-medium text-slate-800">Mahin Sardar</p>
                <p className="text-sm text-slate-500">Administrator</p>
              </div>
              <div
                className="w-10 h-10 rounded-full border-2 border-[#00E8BE] bg-cover bg-center"
                style={{ backgroundImage: `url(${profile_image})` }}
              ></div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="grid grid-cols-12">
          {/* Sidebar */}
          <div
            className={`col-span-2 sticky top-0 h-screen overflow-y-auto shadow-md bg-white z-10 ${!resultId && "pt-7"
              }`}
          >
            {resultId && (
              <div
                onClick={handleBack}
                className="bg-[#D6EEDC] py-3 mb-4 flex justify-center items-center gap-3 cursor-pointer transition hover:bg-[#bfe0c5]"
              >
                <IoChevronBack className="text-2xl" />
                <p className="text-base">Back</p>
              </div>
            )}

            <div
              style={{
                backgroundImage: `url(${profile_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-[70px] h-[70px] mx-auto border-4 border-[#00E8BE] rounded-full"
            ></div>
            <h2 className="text-center mt-4 text-xl font-semibold">Mahin Sardar</h2>

            <div className="mt-7">
              {/* Dashboard Link */}
              <Link to={"/dashboard"}>
                <div className="mb-5 flex justify-center items-center gap-4 py-3 text-white text-lg font-medium bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-md mx-2 hover:scale-105 transition-transform">
                  <RxDashboard className="text-2xl" />
                  <p>Dashboard</p>
                </div>
              </Link>

              {/* Semesters */}
              {semesters.map((item) => (
                <Link key={item.id} to={`/dashboard/semester/${item.id}`}>
                  <div
                    className={`py-3 mt-2 mx-2 text-center shadow-md text-base font-normal rounded-md transition-all hover:bg-[#E6F4EC] ${parseInt(id) === item.id ? "text-[#00BB35] font-semibold bg-[#F0FDF4]" : ""
                      }`}
                  >
                    {item.semester} Semester
                  </div>
                </Link>
              ))}

              {/* Logout */}
              <div className="mt-6 flex items-center justify-center gap-3 cursor-pointer hover:text-red-600 transition">
                <AiOutlineLogout className="text-[#00BB35] text-2xl" />
                <button onClick={handleLogout} type="button" className="text-lg">
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Outlet */}
          <div className="col-span-10 px-4">
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
