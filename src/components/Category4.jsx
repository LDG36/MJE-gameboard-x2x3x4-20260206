import React from 'react'
import { useState } from 'react';



function CategoryFunc() {

  
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
    e.preventDefault();
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // alert(`You selected: ${selectedOption}`);
  // };

  return (
    // <form onClick={handleSubmit}  className="stylingForm1">
    <form className="stylingForm1">

      <label>
        <input
          type="radio"
          name="category"
          value="fruits"
          checked={selectedCategory === 'fruits'}
          onChange={handleChange}
        />
        Fruits
      </label>

      <label>
        <input
          type="radio"
          name="category"
          value="vegetables"
          checked={selectedCategory === 'vegetables'}
          onChange={handleChange}
        />
        Vegetables
      </label>

      <label>
        <input
          type="radio"
          name="category"
          value="numbers"
          checked={selectedCategory === 'numbers'}
          onChange={handleChange}
        />
        Numbers
      </label>

      <label>
        <input
          type="radio"
          name="category"
          value="actions"
          checked={selectedCategory === 'actions'}
          onChange={handleChange}
        />
        Actions
      </label>
      <label>
        <input
          type="radio"
          name="category"
          value="homeware"
          checked={selectedCategory === 'homeware'}
          onChange={handleChange}
        />
        Homeware
      </label>

      <label>
        <input
          type="radio"
          name="category"
          value="transport"
          checked={selectedCategory === 'transport'}
          onChange={handleChange}
        />
        Transport
      </label>

      <label>
        <input
          type="radio"
          name="category"
          value="moods"
          checked={selectedCategory === 'moods'}
          onChange={handleChange}
        />
        Moods
      </label>

      <p>{selectedCategory || 'none'}!</p>

    </form>
  );
}


const Category4 = () => {
  return (
    <div>{CategoryFunc()}</div>
  )
}

export default Category4



// this is an OLD approach (LDG 202510012):

// function CategoryFunc() {
//   const [preferences, setPreferences] = useState({
//     fruitsVeg: '',
//     numbers: '',
//     actions: '',
//     homeware: '',
//     transport: '',
//     moods: '',


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
//           name="fruitsVeg"
//           checked={preferences.fruitsVeg}
//           onChange={handleChange}
//         />
//         Fruits and Veg
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="numbers"
//           checked={preferences.numbers}
//           onChange={handleChange}
//         />
//         Numbers
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="actions"
//           checked={preferences.actions}
//           onChange={handleChange}
//         />
//         Actions
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="homeware"
//           checked={preferences.homeware}
//           onChange={handleChange}
//         />
//         Homeware
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="transport"
//           checked={preferences.transport}
//           onChange={handleChange}
//         />
//         Transport
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="moods"
//           checked={preferences.moods}
//           onChange={handleChange}
//         />
//         Moods
//       </label>

//     </form>
//   );
// }