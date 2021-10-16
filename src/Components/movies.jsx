import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import { getMovies } from "./Services/fakeMovies";
import Pagination from './Common/pagination';
import {paginate} from "./Common/paginate"
import Genre from './listGroup';
import { getGenres } from './Services/fakeGenre';
import _ from "lodash";


class Movies extends Component {
    state = { 
        movies : [],
        genres: [],
        pageSize:4,
        currentPage:1,
        selectedGenre:null,
        sortColumn:{ column:"title", order:"asc"}
     }

     componentDidMount(){
         const genres = [{ _id:'', name: "All Genres"}, ...getGenres()]
         this.setState({ movies: getMovies(), genres })
     }
    
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m=>m._id !== movie._id)
        //return movies;
        this.setState({ movies });
    }

    handleLike = (movie) =>{
        const movies = [...this.state.movies] // saari movies ki list aagyi
       // console.log(movies)
        const index = movies.indexOf(movie) // saari movies mese clicked waali movie ka index nikaala
        movies[index] = { ...movies[index] } // click waali ko pura uthaaya
      //  console.log(movies[index])
        movies[index].liked = !movies[index].liked // usme se liked pe uska opposite assign krdia
        this.setState({movies});
    }

    handlePageChange=(page)=>{
        this.setState({ currentPage: page});
    }

    handleSelectedGenre = (genre) =>{

        this.setState({ selectedGenre : genre, currentPage:1 })
        // let movies = this.state.movies.filter(m=> m.genre._id === genre._id )
        
        // this.setState({movies});
    }

    onSort = (sortColumn) =>{
        this.setState({ sortColumn })
    }


    render() { 
        const {length:count} = this.state.movies;
       // console.log(count)
        
       const { movies:allMovies, currentPage,selectedGenre, pageSize, genres, sortColumn } = this.state;
        //console.log(currentPage)
        
        if(count===0)
           return <p className="my-5">No Movies</p>
        
        //console.log(selectedGenre)
        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m=> m.genre._id === selectedGenre._id) : allMovies;
        
        const sorted = _.orderBy(filtered, [sortColumn.column], [sortColumn.order])

        // const movies = paginate(allMovies, currentPage, pageSize)
        const movies = paginate(sorted, currentPage, pageSize)
        
        
        return ( 
            <div>
                <p className="my-5">Showing {filtered.length} movies in the Database</p>
                
                <div className="row">
                    <div className="col-3">
                        <Genre 
                        genres={genres}  
                        selectedGenre={this.state.selectedGenre}
                        onItemSelect={this.handleSelectedGenre}/>
                    </div>

                    <div className="col">
                        <MoviesTable 
                        movies={movies} 
                        onDelete={this.handleDelete} 
                        handleLike={this.handleLike}
                        sortColumn={sortColumn}
                        onSort={this.onSort}
                        newMovie={this.newMovie}/>

                        <Pagination 
                        itemsCount={filtered.length} 
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}/>
                    </div>
                    
                </div>             
            </div>
         );
    }
}

export default Movies;