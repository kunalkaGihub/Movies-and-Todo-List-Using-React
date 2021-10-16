import React, { Component } from 'react';

const Input = ({name, value, onChange, error, label, type}) => {
    return ( 
        <div className="mb-3 form-group">
            <label htmlFor={name}> {label} </label>
            <input 
            value={value} 
            onChange={onChange} 
            name={name} 
            type={type}
            className="form-control" 
            id={name}/>
            
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
        
     );
}
 
export default Input;