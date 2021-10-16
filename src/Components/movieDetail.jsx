import React, { Component } from 'react';

const MovieDetail = ({match, history}) => {

    // handleButton = () =>{

    //     //In Case of login page .. 
    //     //when user login successfully and click back button then user should not redirect to back page
    //     //thats y we use history.. replace.. method
    //     this.props.history.replace("/movies");
    // }

    return ( 
        <div>
                <h1 className="my-3">Movie form: { match.params.id} </h1>
                {/* <h1 className="my-3">Movie form: { match.params.title} </h1> */}
               
                <button onClick={()=> history.push('/movies')} className="btn btn-primary" btn-sm>Go to Home</button>
            </div>
     );
}
 
export default MovieDetail;
 
