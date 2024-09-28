import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./Dashboard/index";
import Task1 from "./Task1/index";
import Summary from "./Task1/components/Summury";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/task1" element={<Task1 />} />

        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;
