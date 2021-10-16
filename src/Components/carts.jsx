import React, { Component } from 'react';
import Cart from "./cart"

class Carts extends Component {
    

    render() { 
        return ( 
            <div>
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm my-3">Reset</button>
                {this.props.counters.map(counter =>
                    <Cart 
                    key={counter.id} 
                    onDelete={this.props.onDelete} 
                    onIncrement = {this.props.onIncrement}
                    onDecrement = {this.props.onDecrement}
                    // value={counter.value} 
                    // id={counter.id}
                    counter={counter}
                    />
                )}
            </div>
         );
    }
}
 
export default Carts;