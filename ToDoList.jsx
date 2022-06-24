import {useState, useEffect} from 'react';
import ToDoItem from './ToDoItem';
import Add from '@material-ui/icons/Add';

const ToDoList = () => {


    const [task , setTask] = useState("");  //for specific items 
    const [items, setItems] = useState([]); // to update all list array.
    

    //list showing or updatingfunction
    const showItems = (olditems) => {
        setItems((oldItems) => {
            return [...oldItems,task]
        });
        setTask('');

    };

    //deleting function.
    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElement,index) => {
                return index !== id;
            });
        });
    };
    return(
        <>
        <div className="main-Box">
        <div className="box2">
        <input type="text"  className="inputtext" onChange={(e) =>{
            setTask(e.target.value);
            console.log(e.target.value);
        }} value={task}  placeholder="Enter items..."/>
        <button className="btnadd" onClick={() =>{
            if(task === ""){
                alert("ffield is empty => Please! enter the task");
            }
            else{
                showItems();
            }
        }}><span class="badge text-bg-info">Add Task</span></button>
        </div>


        <div className="box">

        <p className="heading">Essential items~</p>

        <ol>
            {
                items.map((currentElement, index) => {
                   
                    return <ToDoItem
                        text = {currentElement}  //<strike>currentElement</strike>
                        id={index}
                        key ={index+1}
                        onSelect ={deleteItem}
                    />
                })
            }
        </ol>
        </div>
        </div>
        </>
    );
};
export default ToDoList;