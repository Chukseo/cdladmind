import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dasboard";
import ContactForm from "./components/ContactForm";
import ApplicationDashboard from "./components/Appplication";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Hero />
      {/* <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          // <Route path="/contact" element={<Contact />} />
        </Routes>
      </main> */}
      <Dashboard />
      <ContactForm />
      <ApplicationDashboard />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;