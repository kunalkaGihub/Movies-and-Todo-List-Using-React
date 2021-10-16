import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return ( 
        <ul>
            <li>
                <Link to="/admin/posts">Posts</Link>
            </li>
        </ul>
     );
}
 
export default Sidebar;