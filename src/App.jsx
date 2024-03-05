import Footer from "./components/Footer";
import Hero from "./components/Hero";
import OurCllients from "./components/OurCllients";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="px-10 font-semibold md:px-20 lg:px-40 ">
        <Navbar />
        <Hero />
        <OurCllients />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
