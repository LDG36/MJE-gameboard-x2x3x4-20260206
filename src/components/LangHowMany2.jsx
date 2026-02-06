import React from 'react'
import { useState } from 'react';



function HowManyLang() {
  const [selectedNbOfLang, setSelectedNbOfLang] = useState('');

  const handleChange = (e) => {
    setSelectedNbOfLang(e.target.value);
    e.preventDefault();
  };

  return (
    <form className="stylingForm1">

      <label>
        <input
          disabled={true}
          type="radio"
          name="howManyLang"
          value="two"
          checked={selectedNbOfLang === 'two'}
          onChange={handleChange}
        />
        Two Languages
      </label>

      <label>
        <input
          type="radio"
          name="howManyLang"
          value="three"
          // checked={selectedNbOfLang === 'three'}
          checked={true}
          onChange={handleChange}
        />
        Three Languages
      </label>

      <label>
        <input
          disabled={true}
          type="radio"
          name="howManyLang"
          value="four"
          checked={selectedNbOfLang === 'four'}
          onChange={handleChange}
        />
        Four Languages
      </label>

      <p>{selectedNbOfLang || 'none'}!</p>

    </form>
  );
}


const LangHowMany2 = () => {
  return (
    <div>{HowManyLang()}</div>
  )
}

export default LangHowMany2



// ---------------------------------------------------------
// old appraoch (LDG 20251012)
// ---------------------------------------------------------
// function HowManyLang() {
//   const [preferences, setPreferences] = useState({
//     twoLang: false,
//     threeLang: false,
//     fourLang: false
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
//           type="checkbox"
//           name="twoLang"
//           checked={preferences.twoLang}
//           onChange={handleChange}
//         />
//         Two Languages
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="threeLang"
//           checked={preferences.threeLang}
//           onChange={handleChange}
//         />
//         Three Languages
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="fourLang"
//           checked={preferences.fourLang}
//           onChange={handleChange}
//         />
//         Four Languages
//       </label>

//     </form>
//   );
// }


