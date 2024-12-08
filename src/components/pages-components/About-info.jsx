import React from "react";
import './styles-components/About-info.css'
import Footer from "../Footer";
import { Link } from 'react-router-dom'

const AboutInfo =()=>{
    return(
<main>
  <div class="about-main">
    <div class="about-top-main">
      <img
        class="about-page"
        src="https://blog.study-america.org/wp-content/uploads/2023/05/iap-pics_05.jpg"
        alt="about-page"
      />
    </div>
    <div class="about-content">
      <div class="about-content-left">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>LinguaPro</strong>, a leading institution dedicated to helping individuals master foreign languages with confidence and ease. Whether you’re a beginner or seeking to perfect your skills, Academy offers a wide range of courses tailored to suit your needs.
        </p>
        <p>
          Our mission is to  <strong>foster communication and cultural exchange</strong> through <strong>innovative teaching methods</strong> and a team of experienced educators.
        </p>
        <p>
        To ensure a comfortable and effective language learning experience, we offer courses at various levels, from Light to Pro. This allows everyone to choose the format and intensity that best suit their goals and availability.For more Information <Link to="/courses"><strong>click here</strong></Link>.
        </p>
      </div>
      <div class="about-content-right">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>🌍 Highly qualified teachers with international certifications.</li>
          <li>📱 Interactive classes with modern technology.</li>
          <li>⏰ Flexible schedules, including evening and weekend options.</li>
          <li>📊 Personalized learning plans and progress tracking.</li>
          <li>📚 Access to exclusive language resources and study materials.</li>
        </ul>
      </div>
    </div>
  </div>
  <Footer/>
</main>
    )
}

export default AboutInfo