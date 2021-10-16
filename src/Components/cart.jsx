import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

class cart extends Component {

    render() { 
        return ( 
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button onClick={()=>this.props.onIncrement(this.props.counter)} 
                    className="m-2 btn btn-info btn-sm">Increment</button>
                    
                    <button onClick={()=>this.props.onDecrement(this.props.counter)} 
                    className="m-2 btn btn-secondary btn-sm" disabled={this.props.counter.value === 0? "disabled":""}>
                        Decrement</button>
                    
                    <button onClick={()=>this.props.onDelete(this.props.counter.id)} 
                    className=" btn btn-danger btn-sm">Delete</button>
                </div> 
            </div>
         );
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0? "Zero": value;
    }

    getBadgeClass(){
        let classes = "m-2 badge badge-";
        return classes += ( this.props.counter.value === 0) ? "warning": "primary"
    }


}
 
export default cart;