import React from "react";
import './styles-components/About-info.css'
import Footer from "../Footer";
import { Link } from 'react-router-dom'

const AboutInfo =()=>{
    return(
<main>
  <div className="about-main">
    <div className="about-top-main">
      <img
        class="about-page"
        src="https://blog.study-america.org/wp-content/uploads/2023/05/iap-pics_05.jpg"
        alt="about-page"
      />
    </div>
    <div className="about-content">
      <div className="about-content-left">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>DevTalk Academy</strong>, a leading institution dedicated to helping individuals master foreign languages with confidence and ease. Whether you’re a beginner or seeking to perfect your skills, Academy offers a wide range of courses tailored to suit your needs.
        </p>
        <p>
          Our mission is to  <strong>foster communication and cultural exchange</strong> through <strong>innovative teaching methods</strong> and a team of experienced educators.
        </p>
        <p>
        To ensure a comfortable and effective language learning experience, we offer courses at various levels, from Light to Pro. This allows everyone to choose the format and intensity that best suit their goals and availability.For more Information <Link to="/courses"><strong>click here</strong></Link>.
        </p>
      </div>
      <div className="about-content-right">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>🌍 Highly qualified teachers with international certifications.</li>
          <li>📱 Interactive classes with modern technology.</li>
          <li>⏰ Flexible schedules, including evening and weekend options.</li>
          <li>📊 Personalized learning plans and progress tracking.</li>
          <li>📚 Access to exclusive language resources and study materials.</li>
        </ul>
      </div>
      <h2>The Story of DevTalk Academy</h2>
      <section className="introduction">
      <p>
      DevTalk Academy began its journey in 2010 with the dream of creating a place where everyone could learn foreign languages in a comfortable and inspiring environment. The academy was founded by two friends, Anna and Michael, who, while traveling the world, realized the importance of speaking different languages for both personal and professional growth.
      </p>
    </section>
    <section className="early-days">
      <h2>The Early Days</h2>
      <p>
        Initially, it was a small language club in their hometown. The first classes were held in a cozy room adorned with world maps and phrases in dozens of languages. Anna, a professional educator, developed a unique teaching methodology that combined interactive exercises, real-life practice, and a personalized approach to each student. Michael, on the other hand, poured his energy into advancing technology, creating an online platform that allowed language learning from anywhere in the world.
      </p>
    </section>
    <section className="mission">
      <h2>Our Mission Today</h2>
      <p>
        Today, DevTalk Academy offers courses for all levels, from beginners to advanced learners, and helps students not only master a language but also immerse themselves in the cultures of the countries where it is spoken. The academy takes pride in its mission: to help people unlock their potential through language learning.
      </p>
    </section>
    </div>
  </div>
  <Footer/>
</main>
    )
}

export default AboutInfo