import React from 'react';

const Select = ({name, value, onChange, error, label, options}) => {
    //console.log("hello::"+options)
    return ( 
        <div className="mb-3 form-group">
            <label htmlFor={name}> {label} </label> 
            {/* inside select .. value jo hai vo field me dikhaane k liye h.. jb edit/new kr rhe ho */}
            <select value={value} onChange={onChange} name={name} className="form-control" id={name}>        
                <option value=""/>
                {options.map(option => (
                    // yeh value me id options ki hai .. options name id se define ho rhe hai
                    <option key={option._id} value={option._id}>
                        {option.name}
                    </option>
                ))}   
            </select>
            
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
        
     );
}
 
export default Select;



//value me genre ki id hai .. jo basicaaly genre ko define kr rhhi h.. ushke basis pe vo edit ya delete hoga..
// option name srf UI k liye h... value me actual ID hai