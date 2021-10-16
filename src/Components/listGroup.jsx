import React, { Component } from 'react';


const Genre = (props) => {
    const { genres, onItemSelect, selectedGenre , textProperty, valueProperty } = props;        
        return ( 
            <ul className="list-group">
                {genres.map(genre=>
                <li 
                    key={genre[valueProperty]} 
                    onClick={()=>onItemSelect(genre)} 
                    className={genre === selectedGenre?"list-group-item list-group-item-success active":"list-group-item list-group-item-success"}>
                {genre[textProperty]}
                </li>)
                }
            </ul>
         );
}

Genre.defaultProps = {
    textProperty:"name",
    valueProperty: "_id"
}
 
 
export default Genre;