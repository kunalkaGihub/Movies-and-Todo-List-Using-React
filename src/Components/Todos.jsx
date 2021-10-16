import React, { Component } from 'react';
import TodoItem from "./TodoItem"

const Todos = (props) => {
    return ( 
        <div>
            {props.todolist.length === 0? "No Items to display":
            <TodoItem 
                todolist={props.todolist}
                key={props.todolist.sno}
                onDelete={props.onDelete}
            />
            }
            

        </div>
               
     );
}
 
export default Todos;