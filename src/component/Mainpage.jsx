import React from "react";
import NavBar from "./Navbar";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import Menu from "./Menu";
import "./style.css";

function Mainpage () {
    return(
        <div >
            <NavBar />
            <Header />
            <div className="sec">
                <div className="container">
                    <Container />
                    <Container />
                    <Container />
                    <Container /> 
                    <Container />
                    <Container />
                    <Container />
                    <Container />
                    <Container />
                    <Menu />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Mainpage;