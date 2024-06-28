import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Portofolio from "./components/Portofolio";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <main className='bg-white-950'>
      <Navbar />
      <div className='flex items-center justify-center flex-col'>
        <HeroSection />

        <Services />

        <Portofolio />
      </div>

      <About />
      <ScrollToTop />
      <Skills />
    </main>
  );
}

export default App;
