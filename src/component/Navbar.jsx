import React from "react";
import "./style.css";

function NavBar () {
    return(
            <div class="nav">
                <div class="container">
                <h1 class="nav-logo"><a href="./index.html">Home</a></h1>
                <div class="nav-menu">
                    <ul class="nav-btn">
                        <li><a href="./index.html">Home</a></li>
                        <li><a href="#" >About Us</a></li>
                        <li><a href="#" target="_blank">Contact</a></li>
                    </ul>
                </div>
            </div>
            </div>
    )
}

export default NavBar;
