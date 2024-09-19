// import React, { useState } from "react";

// function App() {
//   const [updatingH1, settingH1] = useState();
//   const [isMouseOver, settingColor] = useState(false);

//   function handlingClick() {
//     settingH1("你好");
//   }

//   function hover() {
//     settingColor(true);
//     console.log("we need to change it to black");
//   }

//   function unHover() {
//     settingColor(false);
//   }

//   return (
//     <div className="container">
//       <h1>{updatingH1}</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button
//         onClick={handlingClick}
//         onMouseOver={hover}
//         onMouseOut={unHover}
//         style={{
//           backgroundColor: isMouseOver ? "black" : "white",
//           color: isMouseOver && "white",
//         }}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// export default App;

// //1. useState when hover change backgroundColor to black
// //2. if onMouseOut change the backgroundColor back to white

import React, { useState } from "react";

function App() {
  const [passingNewH1, settingH1] = useState("");
  const [inputValue, settingValue] = useState("");
  const [newBackgroundColor, settingColor] = useState(false);

  function handlingClick() {
    if(inputValue.trim() === ""){

      console.log("Please enter your name")
      settingH1 ("Please enter your name")
      
    }else{

       settingH1("Hello " + inputValue + " 😊");
       
    }

    
  }

  function isMouseHere() {
    settingColor(true);
    console.log("Mouse is here");
  }

  function isMouseOut() {
    settingColor(false);
    console.log("Mouse is out of button");
  }

  function handleChange(e) {
    console.log(e.target.value);
    settingValue(e.target.value);

  }

  return (
    <div className="container">
      <h1 style={{ color: passingNewH1 && "#F6FB7A" }}>{passingNewH1}</h1>
      {/* <h2 style={{ color: "#F6FB7A" }}>你好</h2> */}
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleChange}
        value={inputValue}
      />
      <button
        onClick={handlingClick}
        onMouseOver={isMouseHere}
        onMouseOut={isMouseOut}
        style={{
          backgroundColor: newBackgroundColor ? "white" : "#FFDC7F",
          color: newBackgroundColor && "#58A399",
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
