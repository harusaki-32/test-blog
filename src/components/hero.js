import React from "react";
import "../styles/hero.css";

export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                Welcome to my blog!<br />
                Enjoy lots of post. <br />
            </h1>
            <div className="hero-author">
                <img src="https://images.unsplash.com/photo-1681846291878-1103198eb2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1400&q=60" className="hero-author-image" alt="avatar" />
                <p className="hero-author-text">
                    Written by harusaki-32. <br />
                    Front Engineer at Hoge.Inc. Love JavaScript and React.
                </p>
            </div>
        </div>
    );
}