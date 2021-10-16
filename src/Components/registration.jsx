import React, { Component } from 'react';
import Form from './Common/form';
import  Joi  from 'joi-browser';

class Registration extends Form {
    state = {
        data : { username:"", password: "", name:""},
        errors:{
            // username:"Username is required",
            // password:"Password is required"
        }
    }

    schema = {
        username: Joi.string().required().email().label("Email"),
        password: Joi.string().required().min(5).label("Password"),
        name: Joi.string().required().label("Name"),
    }


    doSubmit = () =>{
        //call the server
        console.log("Registered")
   }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username","Username")}
                    {this.renderInput("password","Password","password")}
                    {this.renderInput("name","Name")}


                    {this.renderButton("Register")}
                </form>
            </div>
         );
    }
}
 
export default Registration;