import React, { Component } from 'react';
import Like from './Common/like';
import { Link } from 'react-router-dom';
import newMovie from './newMovies';

class MoviesTable extends Component {

    raiseSort= (column) => {
        const sortColumn = { ...this.props.sortColumn };
        if(sortColumn.column === column){
            sortColumn.order = (sortColumn.order === "asc") ? 'desc' :'asc';
        }else{
            sortColumn.column = column
            sortColumn.order = "asc"
        }
        //console.log(sortColumn.column)
        this.props.onSort(sortColumn)
        
    }

    renderSortIcon = (column) =>{
       // console.log("rendericon")
        if( column !== this.props.sortColumn.column) return null;
        if(this.props.sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>
    }
    
    render() { 
        const { movies, onDelete, handleLike, onSort} = this.props;
        return ( 
            <>
            <Link to="/movies/new" className="btn btn-primary" style={{marginBottom: 20}}>Add Movie</Link>
            <table className="table m-1">
                    <thead>
                        <tr>
                        <th onClick={()=>this.raiseSort('title')} scope="col">Title {this.renderSortIcon("title")}</th>
                        <th onClick={()=>this.raiseSort('genre.name')} scope="col">Genre {this.renderSortIcon('genre.name')}</th>
                        <th onClick={()=>this.raiseSort('numberInStock')} scope="col">Stoke {this.renderSortIcon('numberInStock')}</th>
                        <th onClick={()=>this.raiseSort('dailyRentalRate')} scope="col">Rating {this.renderSortIcon('dailyRentalRate')}</th>
                        <th/>
                        <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(movie =>
                            <tr>
                            <Link to={`/movies/${movie._id}`}><td>{movie.title}</td></Link>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                               <Like liked={movie.liked} onClick={()=>handleLike(movie)}/>
                            </td>
                            <td><button onClick={()=>onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )}
                        
                    </tbody>
                </table>
            </>
         );
    }
}
 
export default MoviesTable;