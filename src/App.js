//import logo from './logo.svg';
import React, { Component } from 'react';
import { Route, Switch , Redirect} from "react-router-dom";
import Navbar from './Components/navbar';
import "bootstrap/dist/css/bootstrap.css";
import Carts from "./Components/carts";
import Todos from "./Components/Todos"
import Footer from './Components/footer';
import AddTodo from "./Components/AddTodo";
import Notfound from './Components/notFound';
import Home from './Components/home';
import Dashboard from './Components/Admin/dashboard';
import Movies from './Components/movies';
import "font-awesome/css/font-awesome.css"
//import MovieDetail from './Components/movieDetail';
import LoginForm from './Components/loginForm';
import './App.css';
import Registration from './Components/registration';
import MovieForm from './Components/movieForm';

class App extends Component {
    state = { 
        counters:[
            {id:1, value:4},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
        ],

        Todos:[
          {sno:1, item: "Cricket", place:"mumbai"},
          {sno:2, item: "Cricket", place:"Bengaluru"},
          {sno:3, item: "Cricket", place:"Ahmedabad"},
          {sno:4, item: "Cricket", place:"Pune"}
        ]

    }

      handleIncrement = counter => {
          const counters = [ ...this.state.counters ];
          const index = counters.indexOf(counter);
          counters[index] = {...counter};
          counters[index].value++;
          this.setState({counters});
      }
      handleDecrement = counter => {
        const counters = [ ...this.state.counters ];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters});
    }

      handleDelete = (counterId)=>{
          let counters = this.state.counters.filter(c => c.id !== counterId)
          this.setState({counters});
      }

      handleReset = () =>{
          let counters = this.state.counters.map(c  => {
              c.value = 0
              return c;
          })
          this.setState({counters})
      }

      handleTodoDelete = (todoId)=>{
        let Todos = this.state.Todos.filter(t => t.sno !== todoId)
        this.setState({Todos});
    }

      addTodo = (item, place) => {
        let sno= this.state.Todos.length +1
        const myTodo = {
          sno:sno,
          item:item,
          place: place
        }
        this.setState({ Todos: [...this.state.Todos, myTodo]})
      }

  render() { 
    const { counters, Todos:todos} = this.state;
    return (
      <React.Fragment>
        <Navbar totalCounters={counters.filter(c=> c.value > 0).length}/>

        
        <main className="container">
          <Switch>
            
            <Route path="/todo" render={()=>
              <main className="container">
                <AddTodo addtodo={this.addTodo}/>
                <Todos todolist={todos} onDelete={this.handleTodoDelete}/>
              </main>
            }
            />
            <Route path="/cart" render={()=>
              <Carts 
              counters={counters}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onReset={this.handleReset}
            />
            }
            />
            <Redirect from="/hello" to="/cart"/>   
            <Route path="/login" component={LoginForm}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/admin" component={Dashboard}/>
            {/* <Route path="/movies/new" component={newMovie}/> */}
            <Route path="/movies/:id" component={MovieForm}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/notfound" component={Notfound}/>
            <Route path="/" exact component={Home}/>
            <Redirect to="/notfound"/>
          </Switch>    
        </main>

        {/* <Footer/> */}
      </React.Fragment>
    );
  }
}

export default App;
