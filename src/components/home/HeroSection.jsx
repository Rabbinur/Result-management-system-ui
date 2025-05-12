import { Link } from "react-router-dom";
import heroImage from "../../assets/oversight-bro 1.png";
const HeroSection = () => {
  return (
    <>
      <main className="grid grid-cols-1 gap-10 lg:grid-cols-12  items-center justify-between">
        {/* text */}
        <section className="col-span-6 lg:leading-[80px]">
          <h1 className="text-[36px] lg:text-[46px] text-center lg:text-left capitalize font-semibold">
            Embracing <span className="text-[#00BB35]">Success</span> with Good
            Results
          </h1>

          <p className="text-xl text-[#000000] my-5 font-normal text-center lg:text-left">
            A good student turns knowledge into a staircase, each step a
            testament to their relentless pursuit of success.
          </p>


          <Link
            to="#"
            className="text-md  font-semibold text-white py-3 px-8 rounded-lg 
             bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md 
             hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            1500+ Current Students
          </Link>

        </section>

        {/* image */}
        <section className="col-span-6 ">
          <div className="grid justify-end">
            <img src={heroImage} alt="Hero Image" width={500} height={500} />
          </div>
        </section>
      </main>
    </>
  );
};

export default HeroSection;
