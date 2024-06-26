import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <main className='bg-gray-950 min-h-screen'>
      <Navbar />
      <div className='flex items-center justify-center flex-col'>
        <HeroSection />

        <Services />

      </div>
    </main>
  );
}

export default App;
