import React from "react";
import './styles-components/Languages-info.css'
import Footer from "../Footer";
import { Link } from 'react-router-dom'

const LanguagesInfo=()=>{
    return(
        <main>
            <div className="top-languages-page">
                <img className="top-languages-page-img" src="https://www.lingoda.com/wp-content/webp-express/webp-images/uploads/2023/03/Bonn-desktop-scaled.jpg.webp" alt="language"/>
                <div className="top-languages-page-content-left">
                    <h2>Learn new Languages with DevTalk!</h2>
                    <ul>
                        <li>🌍 Courses for more than 10 Languages</li>
                        <li>📚 Tailored courses for beginners, intermediate, and advanced learners.</li>
                        <li>🎓 Expert instructors with years of experience in teaching.</li>
                        <li>💻 Online and offline classes to suit your schedule.</li>
                        <li>🤝 A global community of language learners.</li>
                    </ul>
                </div>
                <div className="top-languages-page-content-right">
                    <h2>Learn about our Courses</h2>
                    <Link to="/courses"><button className="top-languages-page-content-right-btn">Learn about...</button></Link> 
                </div>
            </div>
                <div className="languages-page-left">
                    <div class="language-info-card" data-lang="English">
                        <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="English"/>
                        <div className="language-card-content">
                            <h2>English</h2>
                            <p>English is the global language of communication, science, technology, and business. Learning English opens doors to studying at prestigious universities, working for leading companies, and traveling freely.</p>
                            <h3>What You'll Gain</h3>
                            <ul>
                                <li>Mastery of grammar, vocabulary, and pronunciation.</li>
                                <li>Development of communication skills for daily life and work.</li>
                                <li>Preparation for international exams (IELTS, TOEFL, Cambridge Exams).</li>
                            </ul>
                            <h3>Who It's For</h3>
                            <ul>
                                <li>Beginners who want to learn basic English.</li>
                                <li>Those looking to enhance their skills for career or academic purposes.</li>
                                <li>Learners aiming to speak like native speakers.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="intro-page-right">
                        <img src="https://www.bethel.edu/blog/wp-content/uploads/2021/08/future-college-student.jpg"/>
                    </div>
                </div>
                <div className="languages-page-right">
                    <div class="language-info-card" data-lang="German">
                        <img src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" alt="German"/>
                        <div className="language-card-content">
                            <h2>German</h2>
                            <p>German is the official language in Germany, Austria, and Switzerland. It is a key language in European economics and culture and provides access to education at German universities.</p>
                            <h3>What You'll Gain</h3>
                            <ul>
                                <li>Proficiency in German grammar and pronunciation.</li>
                                <li>Courses designed to prepare for exams (TestDaF, Goethe-Zertifikat).</li>
                                <li>Focus on conversational practice and professional vocabulary.</li>
                            </ul>
                            <h3>Who It's For</h3>
                            <ul>
                                <li>Those planning to move or study in Germany.</li>
                                <li>Professionals working with German companies.</li>
                                <li>Learners interested in exploring German culture and literature.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="languages-page-left">
                    <div class="language-info-card" data-lang="Spanish">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" alt="Spanish"/>
                        <div className="language-card-content">
                            <h2>Spanish</h2>
                            <p>Spanish is one of the most widely spoken languages globally, with over 20 countries using it as an official language. It is invaluable for work, tourism, and connecting with millions of native speakers.</p>
                            <h3>What You'll Gain</h3>
                            <ul>
                                <li>Lessons on Spanish grammar and conversational language.</li>
                                <li>Understanding of regional language variations (Spain, Latin America).</li>
                                <li>Preparation for international exams (DELE, SIELE).</li>
                            </ul>
                            <h3>Who It's For</h3>
                            <ul>
                                <li>Travelers to Spain and Latin American countries.</li>
                                <li>Business professionals working with Spanish-speaking clients.</li>
                                <li>Those passionate about Spanish culture, music, and literature.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="intro-page-right">
                        <img src="https://www.bethel.edu/blog/wp-content/uploads/2021/08/future-college-student.jpg"/>
                    </div>
                </div>
                <div className="languages-page-right">
                    <div class="language-info-card" data-lang="French">
                        <img src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" alt="French"/>
                        <div className="language-card-content">
                            <h2>French</h2>
                            <p>French is the language of diplomacy, art, fashion, and gastronomy. It is widely used in international organizations and attracts enthusiasts of culture and travel.</p>
                            <h3>What You'll Gain</h3>
                            <ul>
                                <li>Mastery of fundamental grammar and sentence building.</li>
                                <li>Immersion in the culture of France and French-speaking countries.</li>
                                <li>Preparation for DELF and DALF exams.</li>
                            </ul>
                            <h3>Who It's For</h3>
                            <ul>
                                <li>Individuals wanting to speak the language of love and art.</li>
                                <li>Those planning to study or work in French-speaking countries.</li>
                                <li>Lovers of literature, fashion, and cuisine</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="languages-page-left">
                    <div class="language-info-card" data-lang="Ukrainian">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg" alt="Ukrainian"/>
                        <div className="language-card-content">
                            <h2>Ukrainian</h2>
                            <p>Ukrainian is a rich and melodious language that serves as an integral part of Ukraine’s culture. Learning Ukrainian unlocks the door to exploring Slavic history and traditions.</p>
                            <h3>What You'll Gain</h3>
                            <ul>
                                <li>Mastery of essential grammar and pronunciation.</li>
                                <li>Development of reading, writing, and speaking skills.</li>
                                <li>Immersion in Ukrainian culture, songs, and literature.</li>
                            </ul>
                            <h3>Who It's For</h3>
                            <ul>
                                <li>Those eager to dive into Ukrainian culture.</li>
                                <li>People planning to travel or work in Ukraine.</li>
                                <li>Enthusiasts of Slavic languages and traditions.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="intro-page-right">
                        <img src="https://www.bethel.edu/blog/wp-content/uploads/2021/08/future-college-student.jpg"/>
                    </div>
                </div>
                <Footer/>
        </main>
    )
}

export default LanguagesInfo