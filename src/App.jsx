import AddProjects from "./components/AddProjects";
import Card from "./components/Card";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import Navbar from "./components/Navbar";
import SelectApp from "./components/SelectApp";
import "./index.css";

function App() {
  return (
    <>
      <LandingPage />
      {/* <AddProjects /> */}
    </>
  );
}

export default App;
function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Demo />
      <Footer />
    </>
  );
}
