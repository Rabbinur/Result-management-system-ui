import HeroSection from "./HeroSection";
import ResultPublish from "./ResultPublish";

const Home = () => {
  return (
    <>
      <main className="mt-10">
        <div>
          <HeroSection />
        </div>
        <div className="mt-10">
          <ResultPublish />
        </div>
      </main>
    </>
  );
};

export default Home;
