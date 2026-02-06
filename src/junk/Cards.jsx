import { useState } from 'react';
import Card from '../components/Card';

//tutorial of the indian guy React.js basic (create-react-app)

function Cards()
{
    const [items, setItems] = useState([
        {id:1, text:'dom', stat: "" },
        {id:1, text:'a house', stat: "" },
        {id:1, text:'das Haus', stat: "" },
        {id:2, text:'samochod', stat: "" },

        {id:2, text:'das Auto', stat: "" },
        {id:2, text:'a car', stat: "" },
        {id:3, text:'samolot', stat: "" },
        {id:3, text:'a plane', stat: "" },

        {id:3, text:'das Flugzeug', stat: "" },
        {id:4, text:'osoba', stat: "" },
        {id:4, text:'a person', stat: "" },
        {id:4, text:'die Person', stat: "" }

    ].sort(()=>Math.random()-0.5))

    const [prev, setPrev] = useState(-1);
    // const [next, setNext] = useState(-1);

    function check(current){
        if(items[current].id == items[prev].id)
        {
            items[current].stat = "correct";
            items[prev].stat = "correct";
            setItems([...items]);
            setPrev(-1);
        }
        else
        {
            items[current].stat = "wrong";
            items[prev].stat = "wrong";
            setItems([...items]);
            setTimeout(()=> {
                items[current].stat = ""; 
                items[prev].stat = "";
                setItems([...items]); 
                setPrev(-1)},1000);
                
        }

    }

    function handleClick(id){
        // const newItems = items.map(item =>)
            // alert(id);

        // items[id].stat = "active";
        // setItems([...items]);

        if(prev === -1){

            items[id].stat = "active";
            setItems([...items]);
            setPrev(id);

        }
        else{
            check(id)
        }
    }


    return (
        <div className="container2">
            { items.map((item, index) => (<Card key={index} item={item} id={index} handleClick={handleClick} />))}
        </div>
    )
}

export default Cards;






