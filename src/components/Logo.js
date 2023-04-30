import React from "react";
import pentagram from '../images/pentagram.svg';
import { Link } from "react-router-dom";

const Logo = () => {

    return(
        <div >
            <Link to={`/`} ><img className="logo" src={pentagram} alt="Logo"/></Link>
        </div>
    )
}

export default Logo;