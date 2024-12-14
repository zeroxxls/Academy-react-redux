import React from "react";
import { Link } from 'react-router-dom'
import Loading from './Loading'
import "./styles/Main.css"
import CoursesCards from "./Courses-cards";

const Main = ()=>{
    return(
        <main>
            <div className="top-main">
                <div className="top-main-left">
                    <div className="content">
                        <h1 className="tittle">Learn foreign languages with us</h1>
                        <p className="intro">Set achievable goals. Get advice from native speakers. Achieve more. Learn a foreign language and discover a world of new opportunities!</p>
                        <div className="actions">
                        <Link to="/signup">
                            <button className="action-btn">Join us</button>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="top-main-right">
                    <img className="main-img" src="https://www.busuu.com/user/pages/home/_01-header/busuu-header-hello.png" alt="education"/>
                </div>
            </div>
            <div className="language-selector">
                <h1>Which Language do you want to learn?</h1>
             <div className="languages">
                <Link to="/english">
                <div class="language-card" data-lang="English">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="English"/>
                    <p>English</p>
                </div>
                </Link>
                <Link to="/german">
                <div class="language-card" data-lang="German">
                    <img src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" alt="German"/>
                    <p>German</p>
                </div>
                </Link>
                <Link to="/spain">
                <div class="language-card" data-lang="Spanish">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" alt="Spanish"/>
                    <p>Spanish</p>
                </div>
                </Link>
                <Link to="/french">
                <div class="language-card" data-lang="French">
                    <img src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" alt="French"/>
                    <p>French</p>
                </div>
                </Link>
                <Link to="ukrainian">
                <div class="language-card" data-lang="Ukrainian">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg" alt="Ukrainian"/>
                    <p>Ukrainian</p>
                </div>
                </Link>
              </div>
            </div>
            <div className="aboutUs-selector">
                <div className="aboutUs-container">
                    <div className="aboutUs-content">
                    <h1>About Us</h1>
                    <p>
                        Welcome to <span className="span">DevTalk Academy</span>, your trusted partner in learning foreign languages. 
                        At DevTalk Academy, <span className="span">we believe that language is the key to connecting people across cultures</span>, 
                        and our mission is to make language learning accessible, engaging, and effective for everyone.
                    </p>
                    <ul>
                        <li>🌍 Learn over 10 languages including English, Spanish, French, German, and more.</li>
                        <li>📚 Tailored courses for beginners, intermediate, and advanced learners.</li>
                        <li>🎓 Expert instructors with years of experience in teaching.</li>
                        <li>💻 Online and offline classes to suit your schedule.</li>
                        <li>🤝 Join a global community of language learners.</li>
                    </ul>
                    <h3>Do you want know more?</h3>
                 <Link to="/about"><button className="aboutUs-btn">More about us</button></Link>
                    </div>
                        <div className="aboutUs-image">
                        <img src="https://t1.unipage.net/src/wwskas.png" alt="Learning Languages" />
                    </div>
                </div>
            </div>
            <CoursesCards/>
        </main>
    )
}
export default Main