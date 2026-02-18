import { useState } from 'react';


let availableVoices = [];

const langMap = {
  polish: "pl-PL",
  spanish: "es-ES",
  german: "de-DE",
  english: "en-US",
  french: "fr-FR"
};

// Load voices asynchronously
speechSynthesis.onvoiceschanged = () => {
  availableVoices = speechSynthesis.getVoices();
};



function Card({item, id, handleClick, disabled}){

    const itemClass = item.stat ? " active " + item.stat :"";

    let speakTimeout;
    // //added later - for text to speech 
    // const speak = (message, lang) => {
    //     clearTimeout(speakTimeout);
    //     speechSynthesis.cancel();

    //     speakTimeout = setTimeout(() => {

    //     const utterance = new SpeechSynthesisUtterance(message);
    //     //utterance.lang = "es-ES";

    //     if(lang=='polish'){
    //         utterance.lang = "pl-PL";
    //     }
    //     else if(lang=='spanish')
    //     {
    //         utterance.lang = "es-ES";
    //     }
    //     else if(lang=='german')
    //     {
    //         utterance.lang = "de-DE";
    //     }
    //     else{
    //         utterance.lang = "en-US";
    //     }
    //      // or "pl-PL", "en-GB", etc.
    //     speechSynthesis.speak(utterance);
    //     },50)    };

    //Copilot alternative code 20260217 - but it does not solves the issue with offline Chrome loosing of pronunciation
    //The code above is easier to understand and still works (function speak();) I use bottom for now
    const speak = (message, lang) => {
    clearTimeout(speakTimeout);
    speechSynthesis.cancel();

    speakTimeout = setTimeout(() => {
            const utterance = new SpeechSynthesisUtterance(message);

            // Convert your custom string → real language code
            const langCode = langMap[lang] || "en-US";
            utterance.lang = langCode;

            // Try to find a matching voice
            const voice = availableVoices.find(v => v.lang === langCode);
            if (voice) utterance.voice = voice;

            //you can add a state later to display this prompt
            // if (!voice) {
            // alert("Correct pronunciation is unavailable while Offline and only on Chrome Safari and Edge");
            // }


            speechSynthesis.speak(utterance);
        }, 50);
        };
  

    // const speak = (message, lang) => {
    //     const utterance = new SpeechSynthesisUtterance(message);
    //     const voices = speechSynthesis.getVoices();

    //     const voice = voices.find(v => v.lang.startsWith(lang));
    //     if (voice) utterance.voice = voice;

    //     utterance.lang = lang;
    //     speechSynthesis.speak(utterance);
    // };



    return (
        <div className={"card"+itemClass} onClick={()=>{
            if(!disabled){
            handleClick(id);
            speak(item.text, item.lang)
            };
        }}>
        {/* <div className="card" onClick={()=>handleClick(id)}></div> */}
            <span role="img" aria-label={item.text}>{item.text}{item.icon}</span>{/* {item.id} */}
        </div>
    );
}


export default Card;


