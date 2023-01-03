import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./component/HomePage";
import Navbar from "./component/Navbar";
import RQSuperHero from "./component/RQSuperHero";
import SuperHero from "./component/SuperHero";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/superhero" element={<SuperHero />} />
        <Route path="/rqsuperhero" element={<RQSuperHero />} />
      </Routes>
    </>
  );
}

export default App;
