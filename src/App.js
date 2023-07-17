import React from "react";
import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1>
        <Weather   defaultCity = "Columbia"/>
        <footer>
          This project coded by Jenn
          <a href= "https://github.com/JephJ/my-app-React" target="blank">
          open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://creative-gecko-bbc428.netlify.app/"
            target="_blank"
          
          >
            hosted on Netlify
          </a>
            

        </footer>
      </div>
    </div>
  );
}

export default App;
