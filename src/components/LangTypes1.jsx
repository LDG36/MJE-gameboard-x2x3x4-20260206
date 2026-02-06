import React from 'react'
import { useState } from 'react';

function CheckLanguages() {
  const [preferences, setPreferences] = useState({
    english: false,
    french: false,
    polish: false,
    german: false,
    spanish: false
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPreferences(prev => ({
      ...prev,
      [name]: checked
    }));
    e.preventDefault();
  };

  return (
    <form className="stylingForm1">
      <label>
        <input
          checked={true}
          disabled={true}
          type="checkbox"
          name="english"
          // checked={preferences.english}
          onChange={handleChange}
        />
        English
      </label>
      <label>
        <input
          checked={true}
          disabled={true}
          type="checkbox"
          name="spanish"
          // checked={preferences.spanish}
          onChange={handleChange}
        />
        Spanish
      </label>
      <label>
        <input
          checked={true}
          disabled={true}
          type="checkbox"
          name="polish"
          // checked={preferences.polish}
          onChange={handleChange}
        />
        Polish
      </label>
      <label>
        <input
          disabled={true}
          type="checkbox"
          name="german"
          checked={preferences.german}
          onChange={handleChange}
        />
        German
      </label>
      <label>
        <input
          disabled={true}
          type="checkbox"
          name="french"
          checked={preferences.french}
          onChange={handleChange}
        />
        French
      </label>
    </form>
  );
}



const LangTypes1 = () => {
  return (
    <div>{CheckLanguages()}</div>
  )
}

export default LangTypes1