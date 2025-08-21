import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./components/pages/Home.jsx";
import Startup from "./components/pages/Startup/Startup.jsx";
import Proprietorship from "./components/pages/Startup/Proprietorship.jsx";




function App() {
  return (
         <Router>
      <Navbar />
      <Routes>

         <Route path="/" element={<Home />} />

        {/* Startup main page */}
        <Route path="/startup" element={<Startup />} />

        {/* Nested Startup suboptions */}
        <Route path="/startup/Proprietorship" element={<Proprietorship />} />
      </Routes>
       </Router>  
  )
}

export default App
