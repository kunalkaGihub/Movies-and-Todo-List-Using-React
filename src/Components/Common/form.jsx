import React, { Component } from 'react';
import Joi from "joi-browser";
import Input from '../input';
import Select from '../select';

class Form extends Component {
    state = {
        data : { },
        errors:{ }
    }

    //this method will validate whole form .. not only single field
    validate = () =>{

        //using Joi
        console.log(this.state.data)
            const result= Joi.validate(this.state.data, this.schema, {abortEarly:false})
            console.log(result.error)
            if(!result.error) return null;
    
            const errors = {}
            for(let item of result.error.details) errors[item.path[0]] = item.message
            return errors;
    
        //using normal approach of validation
    
            // if(this.state.data.username === ""){
            //     errors.username = "Username is required"
            // }
    
            // if(this.state.data.password === ""){
            //     errors.password = "Password is required"
            // }
    
            // return Object.keys(errors).length === 0? null : errors;
            
        }
    
        //particular field validation
        validateProperty = ({ name , value}) => {
            //using Joi
                const obj = { [name]: value} // [name](computed property) yeh dynamic name lega  //obj will have only single property
                const schema = { [name]:this.schema[name]} //schema should have only one property ,, and value will get from schema obj
                const { error } = Joi.validate(obj, schema) // agr error hogi
                
                //if(error) return null;
                //return error.details[0].message; // error -> details[0] -> message
                    //ORR
                
                return error ? error.details[0].message : null;
                
            //using normal way
                // if(name === "username"){
                //     if(value.trim()=== "") return "Username is required"
                // }
                // if(name === "password"){
                //     if(value.trim()=== "") return "Password is required"
                // }
        }

        handleSubmit = (e) =>{
            e.preventDefault();
    
            const errors= this.validate()
    
            console.log(errors)
    
            this.setState({errors : errors || {}}) //errors cants be set null.. it should have set to some object
            
            //if there are no errors, validate() will going to return null
            if(errors) return; //if we have error then return immediately
    
           this.doSubmit();
    
        }

        handleChange = ({currentTarget:input}) =>{
        
            const errors = {...this.state.errors};
            //console.log(errors)
            const errorMessage = this.validateProperty(input) //this will get error message from validateproperty function
            if(errorMessage) errors[input.name] = errorMessage; // agr error hai toh errors obj me usko(username or password) assign ho jaaye 
            else delete errors[input.name]  // nhi toh vo name (username or password) hi delete ho jaaye
    
            const data = { ...this.state.data }
            //console.log(data)
            //data.username = e.currentTarget.value;
            data[input.name] = input.value;
            
            //updated one
            this.setState({ data, errors })
        }

        renderButton(label) {
            return (
                <button disabled={this.validate()} type="submit" className="btn btn-success">{label}</button>
            )
        }

        renderSelect(name, label, options){
            console.log("form:"+ options)
            const { data, errors } = this.state;
            return(
                <Select 
                name={name}
                label={label}
                value={data[name]}
                options={options}
                error={errors[name]}
                onChange={this.handleChange}/>
            )
        }

        renderInput(name, label, type = "text"){
            const { data, errors } = this.state;
            return(
                <Input 
                type={type}
                name={name}
                label={label}
                value={data[name]}
                error={errors[name]}
                onChange={this.handleChange}/>
            )
        }
}
 
export default Form;