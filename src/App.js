
import './App.css';
import React from "react";
import Myphoto from "./componnement/profilphoto";
import Adresse from "./componnement/Adresse";
import Fullname from "./componnement/Fullname";

function App() {
  return (
    <div className="App">
       <Myphoto /> 
       <Fullname />
       <Adresse />
       

    </div>
  );
}

export default App;
