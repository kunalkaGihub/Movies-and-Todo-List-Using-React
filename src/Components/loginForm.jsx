import React, { Component } from 'react';
//import "bootstrap/dist/css/bootstrap.css";
//import Input from './input';
import Joi from 'joi-browser'
import Form from "./Common/form"

class LoginForm extends Form {
    
    state = {
        data : { username:"", password: ""},
        errors:{
            // username:"Username is required",
            // password:"Password is required"
        }
    }

    //completely dependent on eact form
    schema = {
        username : Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }   

    doSubmit = () =>{
         //call the server
         console.log("submitted")
    }

    
    render() { 
        // const { data, errors } = this.state;

        return ( 
        <div>
            <h1>Login Form</h1>

            <form onSubmit={this.handleSubmit}>
                
                {this.renderInput('username',"Username")}
                
                {this.renderInput("password", "Password", "password")}
                
                {/* old way */}
                {/* <Input name="password"
                label="Password"
                value={data.password}
                error={this.state.errors.password}
                onChange={this.handleChange}/> */}
                
                {/* button */}
                {this.renderButton("Login")}
            </form>
        </div> 
        );
    }
}
 
export default LoginForm;