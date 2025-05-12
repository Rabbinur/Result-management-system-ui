import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { IoChevronBack } from "react-icons/io5";
const Dashboard = () => {
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
  return (
    <>
      <main className="pb-4 max-w-[1440px] mx-auto">
        <section className="grid grid-cols-12 shadow-md">
          <div className=" py-4 col-span-2 ">
            <Link to={"/"}>
              <p className="font-[Inspiration] text-4xl text-center text-[#00E8BE]">
                Result
              </p>
            </Link>
          </div>
          <div className="col-span-10 "></div>
        </section>
        <section className="grid grid-cols-12">
          <div
            className={`col-span-2 w-full mx-auto shadow-md ${
              !resultId && "pt-7"
            }`}
          >
            {resultId && (
              <div
                onClick={handleBack}
                className="bg-[#D6EEDC] py-3 mb-4 flex justify-center items-center gap-3"
              >
                <IoChevronBack className="text-2xl" />
                <p className="text-base">Back</p>
              </div>
            )}
            <div
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D)`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-[70px]    h-[70px] mx-auto border border-[#00E8BE] rounded-full"
            ></div>
            <h2 className="text-center mt-4 text-xl font-semibold">
              Robiul Islam
            </h2>

            <div className="mt-7 ">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, rgba(194, 224, 203, 1) 0%, rgba(5, 117, 142, 1) 100%)",
                }}
                className="mb-5  flex justify-center items-center gap-4 py-3 text-white text-lg font-medium"
              >
                {" "}
                <RxDashboard className="text-2xl" />
                <Link to={"/dashboard"}>
                  <p className=" ">Dashboard</p>
                </Link>
              </div>
              {semesters.map((item) => (
                <>
                  <div
                    className={`py-3  shadow-md mt-2 ${
                      parseInt(id) === item.id && "text-[#00BB35]"
                    }`}
                    key={item.id}
                  >
                    <Link to={`/dashboard/semester/${item.id}`}>
                      <p className="text-center text-base font-normal">
                        {item.semester} Semester
                      </p>
                    </Link>
                  </div>
                </>
              ))}

              <div className="mt-6 flex items-center justify-center gap-3">
                <AiOutlineLogout className="text-[#00BB35] text-2xl" />
                <button
                  onClick={handleLogout}
                  type="button"
                  className="text-lg"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-10">
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
