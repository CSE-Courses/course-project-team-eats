import React from 'react';

import "./styles.css";

const colorBlue = "#ADD8E6"



function App(){
  return (
    <div style={{background: colorBlue}}>
      <h1 className="bar">Searching all restaurant menus in your area...</h1>
      <img className="pizzaImage" src = "https://i0.wp.com/codemyui.com/wp-content/uploads/2019/01/Rotating-Pizza-Slice-Preloader.gif?w=880&ssl=1" alt="loading screen"/>
    </div>
  )
}

export default App