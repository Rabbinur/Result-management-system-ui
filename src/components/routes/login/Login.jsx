import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginImage from "../../../assets/Saly-10.png";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "mahin@gmail.com" && password === "123456") {
      toast.success("Login Successfully");
      localStorage.setItem("auth", JSON.stringify(true));
      setTimeout(() => {
        navigation("/dashboard");
      }, 2000);
    } else {
      toast.error("Credentials are not correct");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <main className="grid grid-cols-12 max-w-[1440px] mx-auto m-4 font-[Poppins]">
        <div className="col-span-6 mt-7 ml-20">
          <div>
            <p className="font-[Inspiration] text-3xl text-[#00E8BE]">Result</p>
          </div>

          <div className="mt-20">
            <h1 className="text-3xl font-semibold font-[Poppins]">Log in</h1>

            <form onSubmit={handleSubmit} className="mt-16">
              <label
                className="text-[#999999] text-[13px] font-[Poppins]"
                htmlFor="email"
              >
                Email
              </label>
              <br />
              <input
                className="outline-none border-b-2 w-[60%] font-[Poppins] py-2 focus:placeholder:text-[#000842] placeholder:text-base border-[#999999] placeholder:text-[#999999] focus:border-[#000842] mt-2 placeholder:font-normal"
                type="text"
                placeholder="Enter Your Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="mt-12 flex flex-col justify-center w-[60%]">
                <label
                  className="text-[#999999] font-[Poppins] text-[13px]"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="outline-none border-b-2 font-[Poppins] py-2 focus:placeholder:text-[#000842] placeholder:text-base border-[#999999] placeholder:text-[#999999] focus:border-[#000842] mt-2 placeholder:font-normal w-full pr-10"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Your Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 text-gray-600 focus:outline-none"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-lg" />
                    ) : (
                      <FaEye className="text-lg" />
                    )}
                  </button>
                </div>
              </div>
              <div className="w-[60%]">
                <p className="text-[#4D4D4D] text-xs mt-2 text-right">
                  Forget Password?
                </p>
              </div>
              <div className="mt-14">
                <button
                  className="bg-[#006E1F] min-w-[60%] py-3 rounded-full text-white font-[Poppins]"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-span-6 bg-[#92E3A9] rounded-lg">
          <img
            className="max-h-[97vh] mx-auto"
            src={loginImage}
            alt="Login Banner"
          />
        </div>
        <ToastContainer />
      </main>
    </>
  );
};

export default Login;
