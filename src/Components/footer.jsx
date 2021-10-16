import React, { Component } from 'react';

const Footer = () => {
    let style={
        position:"absolute",
        top:"100vh",
        width:"100%"
    }

    return ( 
        <footer className="bg-dark text-light py-2" style={style}>
            <p className="text-center"> 
                Copyright &copy; MyTodoList.com
            </p>
        </footer>
     );
}
 
export default Footer;
