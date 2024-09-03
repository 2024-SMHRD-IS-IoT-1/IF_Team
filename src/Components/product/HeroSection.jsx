// src/components/HeroSection.js
import React,{useState,useEffect} from 'react';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Bring Light to Your Plants</h2>
        <p>Enhance your space with beautiful planter mood lighting that combines nature and illumination.</p>
      </div>
      <div className="hero-image">
        <img src="hero-image.jpg" alt="Planter Mood Lighting" />
      </div>
    </section>
  );
}

export default HeroSection;
