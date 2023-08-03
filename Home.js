import React from "react";
import { Link } from "react-router-dom";
import './New_Style.css';
import './HomeStyle.css'

const Home=()=>{

    return(
        <div>
        <h1 className="Head">Blog App</h1>
        <nav>
            <navigator>
              <Link to="/blogfrom" className="one">Blog Form</Link>
            </navigator>
            <navigator>
            <Link to="/blog" className="two">Blog</Link>
            </navigator>
        </nav>
        </div>
    )
}
export default Home;