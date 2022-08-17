import React, {useState} from "react";
import "./App.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function App() {
  const [array, setArray] = useState([ // hook
    {name:"Seetharam", selected: false}, 
    {name:"Don", selected: false}, 
    {name:"Ganga", selected: false}, 
    {name:"Murali", selected: false}, 
    {name:"Arumdhathi", selected: false}
  ]);

  const handleCheck = (index) => {
    let tempArray = array
    tempArray[index].selected = !tempArray[index].selected
    setArray([...tempArray])
  }

  return (
    <div className="App">
      <FormGroup>
        {array.map((movie, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox checked={movie.selected} onClick={() => handleCheck(index)}/>}
            label={movie.name}
          />
        ))}
      </FormGroup>
    </div>
  );
}