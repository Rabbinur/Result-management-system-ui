import { Link } from "react-router-dom";

const Navbar = () => {
  const navList = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },

    {
      id: 2,
      path: "/about",
      name: "About Us",
    },
  ];

  const auth = JSON.parse(localStorage.getItem("auth"));

  return (
    <>
      <nav className="flex justify-between items-center">
        <div>
          <Link to="/" className="font-[Inspiration] text-4xl text-[#00E8BE]">
            Result
          </Link>
        </div>
        <div className="flex justify-around items-center ">
          <div className="flex justify-between items-center gap-7 ">

            <div className="flex items-center gap-7 ">
              {navList.map((item) => (
                <>
                  <div key={item.id}>
                    <Link className="text-base" to={item.path}>
                      {item.name}
                    </Link>
                  </div>
                </>
              ))}
            </div>

          </div>


        </div>
        <div>
          {!auth ? (
            <div>
              <button className="bg-[#A9E8BA] py-2 px-6 rounded-full">
                <Link className="text-base" to={"/login"}>
                  Login
                </Link>
              </button>
            </div>
          ) : (
          <div className="flex items-center gap-7 ">

            <div >
              <Link className="text-base" to={"/dashboard"}>
                Dashboard
              </Link>
            </div>
            <div>
              <button className="bg-[#A9E8BA] py-2 px-6 rounded-full">
                <Link className="text-base" to={"/logout"}>
                  Logout
                </Link>
              </button>
            </div>
            <div
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D)`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-[50px] h-[50px] border border-[#00E8BE] rounded-full"
            ></div>
          </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
