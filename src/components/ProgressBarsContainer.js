import React from "react";
import ProgressBar from "./ProgressBar";

const testData = [
  {name: "HTML", value:"95", id:"1",  bgcolor: "#28AE60"},
  {name: "CSS and SCSS", value: "90", id: "2",  bgcolor: "#28AE60"},
  {name: "REACT", value: "90", id: "4",  bgcolor: "#28AE60"},
  {name: "VUE", value: "85", id: "5" , bgcolor: "#28AE60"},
  {name: "NODE and EXPRESS", value: "80", id: "7", bgcolor: "#28AE60"},
  {name: "MONGODB and MYSQL", value: "80", id: "8", bgcolor: "#28AE60"},
  {name: "JAVASCRIPT and JQUERY", value: "80", id: "3", bgcolor: "#28AE60"},
  {name: "PHP", value: "70", id: "6", bgcolor: "#28AE60"},
];

function ProgressBarsContainer() {
  return (
    <div className="App">
      {testData.map((item) => (
        <ProgressBar key={item.id} bgcolor={item.bgcolor} completed={item.value} name={item.name}/>
      ))}
    </div>
  );
}

export default ProgressBarsContainer;