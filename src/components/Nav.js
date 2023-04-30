import React from 'react';
import {Link} from 'react-router-dom';



const Nav = () => {
    return(
        <nav className="nav">
          <Link to={`/top-headlines?category=general`}>General</Link>
          <Link to={`/top-headlines?category=technology`}>Tech</Link>
        </nav>
    )

};

export default Nav;