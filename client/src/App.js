import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            Home
          </Route>
          <Route exact path="/about" element={<About />}>
            About
          </Route>
          <Route exact path="/contact" element={<Contact />}>
            Contact
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
