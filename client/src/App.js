import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ListEmployees from "./components/ListEmployees";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <div className="bg-slate-300 flex flex-col min-h-screen">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ListEmployees/>} />
        <Route exact path="/employees" element={<ListEmployees/>} />
        <Route exact path="/add-employee" element={<AddEmployee/>} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
