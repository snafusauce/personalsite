import "./intro.scss"
import React, { Component } from 'react'
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();
    
    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true,
            backDelay:  500,
            typeSpeed:  100,
            backSpeed:  50,
            cursorChar: "|",
            loop:       false,

            strings: ['prodouct', ' data analysis', ' operations', ' coffee' ] })
        
    },[])
    return (
        <div className = "intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/snow.jpg" alt="A man in the snow with their child"/>
                </div>
            </div>
   
            <div className="right">
                <div className="wrapper">
                <h2>Hi there, I'm</h2>
                <h1 className="gradient">Mike Saucedo.</h1>
                <h2>I know things about</h2>
                <h2>
                <span ref={textRef}></span></h2>
                </div>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="a picture"/>
                </a>
            


        </div>
    )
}
