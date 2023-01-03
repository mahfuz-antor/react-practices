import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./component/HomePage";
import Navbar from "./component/Navbar";
import SuperHero from "./component/SuperHero";
import RQSuperHero from "./component/RQSuperHero";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/superhero" element={<SuperHero />} />
          <Route path="/rqsuperhero" element={<RQSuperHero />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
