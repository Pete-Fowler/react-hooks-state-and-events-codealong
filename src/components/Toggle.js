import React, { useState } from "react";

function Toggle() {
  const [ toggle, setToggle ] = useState('OFF');
  let color;
  const click = () => {
    if(toggle === 'OFF') {
      setToggle(toggle => 'ON');
    } else { 
      setToggle(toggle => 'OFF');
    }
  }

  return <button style={{backgroundColor: toggle === 'ON' ? 'red' : 'white'}}onClick={click}>{toggle}</button>;
}

export default Toggle;
