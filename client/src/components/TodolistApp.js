import React, { useState, useEffect } from "react";
import { addItem, getAllItem, deleteItem } from "../services/todolist.service.js";
import ToDoItem from "./ToDoItem.js";

function App() {
    const [item, setValueItem] = useState("");
    const [listItem, setListItem] = useState([]);

    function handleChange(e){
        setValueItem(e.target.value);
    }

    function saveItem(){
        const data = {
            value: item
        }
        addItem(data).then(res => {
            console.log(res.data) ;
        }).catch(e => console.log(e))
        setValueItem("");
    }

    function delItem(itemId){
      deleteItem(itemId).then(res => {
        console.log(res.data) ;
    }).catch(e => console.log(e))
    }

    useEffect(() => {
        getAllItem().then(res => {setListItem(res.data)});
      }, [listItem]);
      
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" 
                value={item}
                onChange={handleChange}
        />
        <button onClick={saveItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {listItem.map((Item, key) => (
          <ToDoItem 
            key={key}
            id={Item._id}
            onChecked={delItem}
            text={Item.value}
          />
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
