import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Posts from './posts';
import { Route } from 'react-router-dom';


const Dashboard = () => {
    return (  
        <div>
                <h1>Welcome to about us page</h1>
                <Sidebar/>
                <Route path="/admin/posts" render={Posts}/> 
       </div>
    );
}
 
export default Dashboard;