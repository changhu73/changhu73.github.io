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

  .slider-title {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 10px 0;
    color: #555;
    text-align: center;
  }

  .slider-container {
    position: relative;
    overflow: hidden;
    padding: 10px;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    cursor: grab;
    margin-bottom: 20px; /* 添加底部间距 */
  }

  .slider-container.active {
    cursor: grabbing;
  }

  .slider-track {
    display: flex;
    gap: 15px;
    user-select: none;
    padding-bottom: 20px; /* 为提示文字留出空间 */
  }

  .photo-card {
    flex: 0 0 320px; /* 增加卡片宽度，从280px改为320px */
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
    height: 220px; /* 增加图片高度，从180px改为220px */
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
  
  .drag-hint {
      position: absolute;
      bottom: 8px;
      right: 15px;
    color: #888;
    font-size: 0.8rem;
      font-style: italic;
  }
</style>

<!-- This is the main HTML content for your travel page. -->
<div class="travel-log-container">

   <div class="trip-section">
    <h2>Guizhou(贵州) <span class="trip-date">2025.4</span></h2>
    <div class="slider-container">
      <h3 class="slider-title">黔西三江古道</h3>
      <div class="slider-track">
        <div class="photo-card">
          <img src="/images/travel/guizhou/guizhou1.jpg" alt="">
        </div>
        <div class="photo-card">
          <img src="/images/travel/guizhou/guizhou2.jpg" alt="">
        </div>
        <div class="photo-card">
          <img src="/images/travel/guizhou/guizhou3.jpg" alt="">
        </div>
        <div class="photo-card">
          <img src="/images/travel/guizhou/guizhou4.jpg" alt="">
        </div>
        <div class="photo-card">
          <img src="/images/travel/guizhou/guizhou5.jpg" alt="">
        </div>
        <div class="photo-card">
          <img src="/images/travel/guizhou/guizhou6.jpg" alt="">
        </div>
        <div class="photo-card">
          <img src="/images/travel/guizhou/guizhou7.jpg" alt="">
        </div>
        <div class="photo-card">
          <img src="/images/travel/guizhou/guizhou8.jpg" alt="">
        </div>
        <div class="photo-card">
          <img src="/images/travel/guizhou/guizhou9.jpg" alt="">
        </div>
      </div>
      <div class="drag-hint">Drag to see more photos →</div>
    </div>
        </div>

  <div class="trip-section">
    <h2>Taiwan(臺灣) <span class="trip-date">2025.1</span></h2>
    <div class="slider-container">
      <h3 class="slider-title">National Palace Museum (國立故宮博物院)</h3>
      <div class="slider-track">
        <!-- Add photos for this trip here -->
        <div class="photo-card">
          <img src="/images/travel/taiwan/taiwan1.jpg" alt="National Palace Museum">
          <!-- <div class="caption"><p>National Palace Museum (國立故宮博物院)</p></div> -->
        </div>
        <div class="photo-card">
          <img src="/images/travel/taiwan/taiwan2.jpg" alt="Jadeite Cabbage">
          <div class="caption"><p>Jadeite Cabbage (翠玉白菜)</p></div>
        </div>
        </div>
      <div class="drag-hint">Drag to see more photos →</div>
      </div>
    <div class="slider-container">
      <h3 class="slider-title">National Revolutionary Martyrs' Shrine (国民革命忠烈祠)</h3>
      <div class="slider-track">
        <!-- Add photos for this trip here -->
        <div class="photo-card">
          <img src="/images/travel/taiwan/taiwan11.jpg" alt="National Revolutionary Martyrs' Shrine">
          <!-- <div class="caption"><p>National Revolutionary Martyrs' Shrine (国民革命忠烈祠)</p></div> -->
        </div>
        <div class="photo-card">
          <img src="/images/travel/taiwan/taiwan12.jpg" alt="National Revolutionary Martyrs' Shrine">
          <!-- <div class="caption"><p>National Revolutionary Martyrs' Shrine (国民革命忠烈祠)</p></div> -->
        </div>
        <div class="photo-card">
          <img src="/images/travel/taiwan/taiwan13.jpg" alt="National Revolutionary Martyrs' Shrine">
          <!-- <div class="caption"><p></p></div> -->
      </div>
      </div>
      <div class="drag-hint">Drag to see more photos →</div>
  </div>
    <!-- New Slider Container -->
    <!-- <div class="slider-container">
      <h3 class="slider-title">Natural Landscapes</h3>
      <div class="slider-track">
        <div class="photo-card">
          <img src="/images/travel/taiwan/taiwan3.jpg" alt="Taroko Gorge">
          <div class="caption"><p>Taroko Gorge (太魯閣峽谷)</p></div>
  </div>
        <div class="photo-card">
          <img src="/images/travel/taiwan/taiwan4.jpg" alt="Sun Moon Lake">
          <div class="caption"><p>Sun Moon Lake (日月潭)</p></div>
</div>
      </div>
      <div class="drag-hint">Drag to see more photos →</div>
    </div> -->

  </div>

  <!-- To add a new trip, copy an entire .trip-section block and paste it here. -->

</div>

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