import React, { Component } from 'react';
import { getGenres } from './Services/fakeGenre';
import { getMovie, saveMovie } from './Services/fakeMovies';
import  Joi  from 'joi-browser';
import Form from './Common/form';

class MovieForm extends Form {
    state = { 
        data: {
            title:"", genreId:"", numberInStock:"", dailyRentalRate:""
        },

        // genreId: above we particularly care about genre id only..

        genres:[],   //in componentdidmount later will get genre from imaginary server (fake genre)
        errors:{}
     }

    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().min(0).max(100).label("Number In Stock"),
        dailyRentalRate: Joi.number().required().min(0).max(100).label("Daily Rental Rate")
    } 

    componentDidMount(){
        const genres = getGenres();
        this.setState({genres})

        const movieId = this.props.match.params.id;
        // agr "new" hai toh immideatly return krdenge ..bcz we dont need to populate the form with existing movie obj
        if(movieId === "new") return;  
       // console.log("new")

        const movie = getMovie(movieId) //from movies db will get particular movie obj .. (GetMovie)
        if(!movie) return this.props.history.replace("/not-found");

        //console.log("new")
        this.setState({ data: this.mapToViewModel(movie)}); 
        //this method will get movie obj and maps it to the diff movie obj which we can use in this form
    }

    mapToViewModel(movie){   //basically we are retuning new obj
        return{
        _id: movie._id,
        title : movie.title,
        genreId: movie.genre._id,
        numberInStock: movie.numberInStock,
        dailyRentalRate: movie.dailyRentalRate
        }
    }

    doSubmit = () =>{
        saveMovie(this.state.data)  
        //function in fake movie service (agr movie id, DB me kisi movie se match nhi ki toh usko new movie id assign ho jaayegi)

        //this.state.data is viewmodal.. which look exactly like mapviewmodal function

        //will save the movie 

        this.props.history.push("/movies"); // and redirect user to /movies
    }

    render() { 
        return ( 
            <>
                <h1>Movie Form</h1>

                <form onSubmit={this.handleSubmit}>
                    
                    {this.renderInput('title',"title")}
                    {this.renderSelect("genreId", "Genre", this.state.genres)}
                    {this.renderInput("numberInStock", "Number In Stock", "number")}
                    {this.renderInput("dailyRentalRate", "Rate")}
                    
                    {this.renderButton("Save")}
                </form>
            </>
         );
    }
}
 
export default MovieForm;



// 1st: sabe pehle kisi bhi movie pe click krna ya new add krna me sb render hoga component did mount method se
    //--> agr para me new hai toh vo khaali form render kega
    //--> agr movie id h para me vo fake movies se movie obj uthayega or yaha pe set state krdega..
    //--> set kreke vo render krdega .. form or select ya input component k through

//Ab Edit ya new add krne pe
//--> sbse pehle kuch bhi change kre value me.. toh onchange chlega.. ushke saare function chalenge .. 
//--->state set hote hi .. change render ho jaayega
// or fr save krenge form ko.. toh onsubmit chalega.. or save movie method particular movie ka data push krdega..
