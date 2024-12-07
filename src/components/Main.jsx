import React from "react";
import Loading from './Loading'
import "./styles/Main.css"

const Main = ()=>{
    return(
        <main>
            <div className="top-main">
                <div className="top-main-left">
                    <div className="content">
                        <h1 className="tittle">Learn foreign languages with us</h1>
                        <p className="intro">Set achievable goals. Get advice from native speakers. Achieve more. Learn a foreign language and discover a world of new opportunities!</p>
                        <div className="actions">
                            <button className="action-btn">Join us</button>
                        </div>
                    </div>
                </div>
                <div className="top-name-right">
                    <img className="main-img" src="https://www.busuu.com/user/pages/home/_01-header/busuu-header-hello.png" alt="education"/>
                </div>
            </div>
            <div className="slider">
                
            </div>
        </main>
    )
}
export default Main