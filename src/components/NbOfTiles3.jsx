import React from 'react'
import { useState } from 'react';




function NbOfTiles3func() {
  const [selectedTiles, setSelectedTiles] = useState('');

  const handleChange = (e) => {
    setSelectedTiles(e.target.value);
    e.preventDefault();
  };

  return (
    <form className="stylingForm1">

      <label>
        <input
          type="radio"
          name="howManyTiles"
          value="easy_x12"
          checked={true}
          // checked={selectedTiles === 'easy_x12'}
          onChange={handleChange}
        />
        Easy_x12
      </label>

      <label>
        <input
          disabled={true}
          type="radio"
          name="howManyTiles"
          value="medium_x24"
          checked={selectedTiles === 'medium_x24'}
          onChange={handleChange}
        />
        Medium_x24
      </label>

      <label>
        <input
          disabled={true}
          type="radio"
          name="howManyTiles"
          value="hard_x36"
          checked={selectedTiles === 'hard_x36'}
          onChange={handleChange}
        />
        Hard_x36
      </label>

      <p>{selectedTiles || 'none'}!</p>

    </form>
  );
}


const NbOfTiles3 = () => {
  return (
    <div>{NbOfTiles3func()}</div>
  )
}

export default NbOfTiles3






// -----------------------------------------------------
// old solution (LDG 20251012):
// -----------------------------------------------------

// function NbOfTiles3func() {
//   const [preferences, setPreferences] = useState({
//     easy_x12: false,
//     medium_x24: false,
//     hard_x48: false
//   });

//   const handleChange = (e) => {
//     const { name, checked } = e.target;
//     setPreferences(prev => ({
//       ...prev,
//       [name]: checked
//     }));
//   };

//   return (
//     <form className="stylingForm1">
//       <label>
//         <input
//           type="radio"
//           name="easy_x12"
//           checked={preferences.easy_x12}
//           onChange={handleChange}
//         />
//         Easy_x12
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="medium_x16"
//           checked={preferences.medium_x16}
//           onChange={handleChange}
//         />
//         Medium_x16
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="hard_x24"
//           checked={preferences.hard_x24}
//           onChange={handleChange}
//         />
//         Hard_x24
//       </label>

//     </form>
//   );
// }

