import React from "react";
import "./App.css";
import Header from "./components/Header";
import NextTwo from "./components/NextTwo";
import NextThree from "./components/NextThree";
import NextFour from "./components/NextFour";
import AboutUs from "./components/AboutUs";
import NextFive from './components/NextFive';
import Footer from "./components/Footer";
import TopFooter from "./components/TopFooter";
import NextSix from "./components/NextSix";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Make sure to import from "react-router-dom"
import Services from "./components/Services";
import NextSeven from "./components/NextSeven";
import NextEight from "./components/NextEight";
// import Whatsapp from "./components/Whatsapp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            <>
              <Header />
              {/* <Whatsapp/> */}
              <NextTwo />
              <NextThree />
              <NextFour />
              <NextFive />
              <NextSix />
              <NextSeven />
              <AboutUs />
              <NextEight />
              <TopFooter />
              <Footer />
             
            </>
          } />
          <Route exact path="/Services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
