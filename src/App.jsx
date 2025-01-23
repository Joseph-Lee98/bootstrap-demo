import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AboutUs from "./components/AboutUs/AboutUs";
import Menu from "./components/Menu/Menu";
import ContactDetails from "./components/ContactDetails/ContactDetails";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <AboutUs />
        <Menu />
        <ContactDetails />
      </main>
    </>
  );
};

export default App;
