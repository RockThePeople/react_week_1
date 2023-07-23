import React from "react";
import './style.css';
import camera from "./images/camera_article.jpg";

function Container() {
    return (
        <div>
            <article className="artc" >
                <div className="imgs">
                <img src={camera}></img>
                </div>
            </article>
            <p>RockThePeople<br/>price : 100,000</p>
        </div>
    );
};

export default Container;