import React, { Component } from 'react';

const TodoItem = (props) => {
    return ( 
        <>
            <table className="table my-3">
                <thead>
                    <tr>
                    <th scope="col">Sno.</th>
                    <th scope="col">Sports Name</th>
                    <th scope="col">Place</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todolist.map(item =>
                    <tr>
                    <th scope="row">{item.sno}</th>
                    <td>{item.item}</td>
                    <td>{item.place}</td>
                    <td><button onClick={()=>props.onDelete(item.sno)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>  
                    )}
                                
                </tbody>
            </table>
        </>
     );
}
 
export default TodoItem;