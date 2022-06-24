import {useState} from 'react';
import React from 'react';
import  Deleteicon from '@material-ui/icons/Delete';

const ToDoItem = (props)=> {


    const [check, setCheck] = useState(true);

    const hideItem = (id) => {  // for a particular item to hide in the app.
        setCheck(!check);
       console.log(check);
     };

    // there are people in the lne and you punch everyone thats the punchline.
    //<strike>props.text</strike> is the punchline 


    return(
        <>
        <div className="todoitem">
            <input type="checkbox" className="checkbox" onClick={hideItem}  />
            <p className="text">{check?  props.text : <strike>{props.text}</strike>}</p>
            {check ? '' : <p className="completed">Completed</p>}
            <button className="btn"
            onClick={() => {
                props.onSelect(props.id); // this is for onclick delete button.
            }}><Deleteicon/></button>
        </div>
        </>
    );
};


export default ToDoItem;
