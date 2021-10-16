import React, { Component, useState } from 'react';

const AddTodo = (props) => {
    const [item, setItem] = useState("");
    const [place, setPlace] = useState("");

    const submit = (e)=>{
       
        e.preventDefault();  // help in stop reloading page
        if(!item || !place){
            alert("Hey Something is missing")
        }else{
            props.addtodo(item, place);
        }  
    }

    return ( 
        <div>
            <h2 className="my-2" style={{color: "green" }}>What's In Your Bucket</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="item" className="form-label">Item Name</label>
                    <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} className="form-control" id="item" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="place" className="form-label">Place</label>
                    <input type="text" value={place} onChange={(e)=>setPlace(e.target.value)} className="form-control" id="place"/>
                </div>
                <button onClick={submit} type="submit" className="btn btn-primary btn-sm">Add Todo</button>
            </form>
        </div>
     );
}
 
export default AddTodo;