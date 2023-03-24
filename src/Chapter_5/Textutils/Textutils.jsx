import React, { useState } from "react";
import About from "./About";
import Alert from "./Alert";
import Navbar from "../Navbar";
import Textform from "./Textform_Hooks_useState";
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";

const Textutils = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");

  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "aqua";
      showAlert(" : Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert(" : Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Textutils"
          more="Explore More"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact path="/"
            element={
              <Textform
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            }
          />
        </Routes>
        <Routes>
          <Route exact path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Textutils;
