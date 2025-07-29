---
layout: archive
title: "Travel"
permalink: /travel/
author_profile: true
---

{% include base_path %}

<!-- The following code adds custom styles for the travel sliders. -->
<style>
  /* Google Fonts for a nicer look */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

  /* Use a class to scope the styles to the travel page content */
  .travel-log-container {
    font-family: 'Poppins', sans-serif;
    color: #333;
    line-height: 1.6;
    margin-top: 2rem;
  }

  .trip-section {
    margin-bottom: 3rem;
  }

  .trip-section h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 0.5rem;
  }
  
  .trip-section h2 .trip-date {
      font-size: 1rem;
      font-weight: 300;
      color: #777;
      margin-left: 10px;
  }

  .slider-container {
    position: relative;
    overflow: hidden;
    padding: 10px;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    cursor: grab;
  }

  .slider-container.active {
    cursor: grabbing;
  }

  .slider-track {
    display: flex;
    gap: 15px;
    user-select: none;
  }

  .photo-card {
    flex: 0 0 280px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }
  
  .photo-card:hover {
      transform: translateY(-3px);
  }

  .photo-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
  }

  .photo-card .caption {
    padding: 12px;
    text-align: center;
  }
  
  .photo-card p {
    margin: 0;
    font-size: 0.9rem;
    color: #555;
  }
  
  .slider-container::after {
      content: 'Drag to see more photos →';
      position: absolute;
      bottom: 8px;
      right: 15px;
      color: #bbb;
      font-size: 0.75rem;
      font-style: italic;
      opacity: 0;
      transition: opacity 0.3s;
  }
  
  .slider-container:hover::after {
      opacity: 1;
  }
</style>

<!-- This is the main HTML content for your travel page. -->
<div class="travel-log-container">

  <!-- Trip 1: Japan -->
  <div class="trip-section">
    <h2>Taiwan <span class="trip-date">2025.1</span></h2>
    <div class="slider-container">
      <div class="slider-track">
        <!-- Add photos for this trip here -->
        <div class="photo-card">
          <img src="/images/travel/taiwan/aiwan1.jpg" alt="">
          <div class="caption"><p>National Palace Museum (國立故宮博物院)</p></div>
        </div>
            <div class="photo-card">
          <img src="/images//travel/taiwan/taiwan2.jpg" alt="">
          <div class="caption"><p>Jadeite Cabbage (翠玉白菜)</p></div>
        </div>
>
        </div>
        <!-- To add more photos to this trip, copy a photo-card block and paste it here. -->
      </div>
    </div>
  </div>
  
  <!-- To add a new trip, copy an entire .trip-section block and paste it here. -->


<!-- This script enables the drag-to-scroll functionality for all sliders. -->
<script>
  // Ensure the script runs after the page is fully loaded.
  document.addEventListener('DOMContentLoaded', (event) => {
    const sliders = document.querySelectorAll('.slider-container');

    sliders.forEach(slider => {
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
      });

      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
      });

      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed here
        slider.scrollLeft = scrollLeft - walk;
      });
    });
  });
</script>