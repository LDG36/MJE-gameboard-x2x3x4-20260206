import React from 'react'
import { useState } from 'react';


function FlipFunc() {
  const [selectedFlip, setSelectedFlip] = useState('');

  const handleChange = (e) => {
    setSelectedFlip(e.target.value);
    e.preventDefault();
  };

  return (
    // <form onClick={handleSubmit}  className="stylingForm1">
    <form className="stylingForm1">

      <label>
        <input
          type="radio"
          name="cardVisible"
          value="true"
          checked={selectedFlip === 'true'}
          onChange={handleChange}
        />
        Tiles Visible
      </label>

      <label>
        <input
          type="radio"
          name="cardVisible"
          value="false"
          checked={selectedFlip === 'false'}
          onChange={handleChange}
        />
        Tiles Hidden
      </label>

      <p>{selectedFlip || 'none'}!</p>

    </form>
  );
}


const Uncovered5 = () => {
  return (
    <div>{FlipFunc()}</div>
  )
}

export default Uncovered5