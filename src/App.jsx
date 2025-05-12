import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <main className=" mb-8">
        <div className=" border py-4 px-10 sticky top-0 bg-white  shadow-xl ">
          <Navbar />
        </div>

        <div className="max-w-[1280px] mx-auto px-10">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
