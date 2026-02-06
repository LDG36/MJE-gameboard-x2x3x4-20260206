import React from 'react'
import { useState } from 'react';

function InstantForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <p>👋 Hello, {formData.name || 'stranger'}!</p>
      <p>📧 We'll contact you at: {formData.email || 'your email'}</p>
    </form>
  );
}

const Template = () => {
  return (
    <div>{InstantForm()}</div>
  )
}

export default Template


// ---------------------------------------------------------------------

// import { useState } from 'react';

// function MultiCheckboxForm() {
//   const [preferences, setPreferences] = useState({
//     email: false,
//     sms: false,
//     push: false
//   });

//   const handleChange = (e) => {
//     const { name, checked } = e.target;
//     setPreferences(prev => ({
//       ...prev,
//       [name]: checked
//     }));
//   };

//   return (
//     <form>
//       <label>
//         <input
//           type="checkbox"
//           name="email"
//           checked={preferences.email}
//           onChange={handleChange}
//         />
//         Email
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="sms"
//           checked={preferences.sms}
//           onChange={handleChange}
//         />
//         SMS
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="push"
//           checked={preferences.push}
//           onChange={handleChange}
//         />
//         Push Notifications
//       </label>
//     </form>
//   );
// }
