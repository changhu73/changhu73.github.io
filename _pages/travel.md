---
layout: archive
title: "Travel"
permalink: /travel/
author_profile: true
---

{% include base_path %}

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

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
    overflow-x: auto;
    padding: 10px;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    margin-bottom: 20px;
    scrollbar-color: #888 #f1f1f1;
    cursor: grab;
  }
  
  .slider-container::-webkit-scrollbar { height: 8px; }
  .slider-container::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
  .slider-container::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; }
  .slider-container::-webkit-scrollbar-thumb:hover { background: #555; }

  .slider-track {
    display: flex;
    gap: 15px;
    user-select: none;
    padding-bottom: 10px;
  }

  .photo-card {
    flex: 0 0 400px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    position: relative;
  }

  .photo-card:hover {
    transform: translateY(-3px);
  }

  .photo-card img {
    width: 100%;
    height: 280px;
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

  /* New CSS-based Lightbox styles */
  .lightbox {
    display: none;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    animation: fadeIn 0.3s;
  }

  .lightbox:target {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lightbox img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 5px;
    animation: zoomIn 0.3s;
  }
  
  .lightbox .close-btn {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
    text-decoration: none;
  }

  .lightbox .close-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Place it behind the image and button */
  }

  @keyframes fadeIn { from {opacity: 0;} to {opacity: 1;} }
  @keyframes zoomIn { from {transform: scale(0.8);} to {transform: scale(1);} }

</style>

<div class="travel-log-container">

  <div class="trip-section">
    <h2>Guizhou(贵州) <span class="trip-date">2025.4</span></h2>
    <div class="slider-container">
      <h3 class="slider-title">黔西三江古道</h3>
      <div class="slider-track">
        <div class="photo-card"><a href="#gz1"><img src="/images/travel/guizhou/guizhou1.jpg" alt="Scenery 1"></a></div>
        <div class="photo-card"><a href="#gz2"><img src="/images/travel/guizhou/guizhou2.jpg" alt="Scenery 2"></a></div>
        <div class="photo-card"><a href="#gz3"><img src="/images/travel/guizhou/guizhou3.jpg" alt="Scenery 3"></a></div>
        <div class="photo-card"><a href="#gz4"><img src="/images/travel/guizhou/guizhou4.jpg" alt="Scenery 4"></a></div>
        <div class="photo-card"><a href="#gz5"><img src="/images/travel/guizhou/guizhou5.jpg" alt="Scenery 5"></a></div>
        <div class="photo-card"><a href="#gz6"><img src="/images/travel/guizhou/guizhou6.jpg" alt="Scenery 6"></a></div>
        <div class="photo-card"><a href="#gz7"><img src="/images/travel/guizhou/guizhou7.jpg" alt="Scenery 7"></a></div>
        <div class="photo-card"><a href="#gz8"><img src="/images/travel/guizhou/guizhou8.jpg" alt="Scenery 8"></a></div>
        <div class="photo-card"><a href="#gz9"><img src="/images/travel/guizhou/guizhou9.jpg" alt="Scenery 9"></a></div>
      </div>
    </div>
  </div>

  <div class="trip-section">
    <h2>Taiwan(臺灣) <span class="trip-date">2025.1</span></h2>
    <div class="slider-container">
      <h3 class="slider-title">National Palace Museum (國立故宮博物院)</h3>
      <div class="slider-track">
        <div class="photo-card"><a href="#tw1"><img src="/images/travel/taiwan/taiwan1.jpg" alt="Museum"></a></div>
        <div class="photo-card">
          <a href="#tw2"><img src="/images/travel/taiwan/taiwan2.jpg" alt="Jadeite Cabbage"></a>
          <div class="caption"><p>Jadeite Cabbage (翠玉白菜)</p></div>
        </div>
      </div>
    </div>
    <div class="slider-container">
      <h3 class="slider-title">National Revolutionary Martyrs' Shrine (國民革命忠烈祠)</h3>
      <div class="slider-track">
        <div class="photo-card"><a href="#tw11"><img src="/images/travel/taiwan/taiwan11.jpg" alt="Shrine 1"></a></div>
        <div class="photo-card"><a href="#tw12"><img src="/images/travel/taiwan/taiwan12.jpg" alt="Shrine 2"></a></div>
        <div class="photo-card"><a href="#tw13"><img src="/images/travel/taiwan/taiwan13.jpg" alt="Shrine 3"></a></div>
      </div>
    </div>
  </div>

</div>

<!-- Image Lightboxes -->
<div id="gz1" class="lightbox"><a href="#" class="close-bg"></a><a href="#" class="close-btn">&times;</a><img src="/images/travel/guizhou/guizhou1.jpg"></div>
<div id="gz2" class="lightbox"><a href="#" class="close-bg"></a><a href="#" class="close-btn">&times;</a><img src="/images/travel/guizhou/guizhou2.jpg"></div>
<div id="gz3" class="lightbox"><a href="#" class="close-bg"></a><a href="#" class="close-btn">&times;</a><img src="/images/travel/guizhou/guizhou3.jpg"></div>
<div id="gz4" class="lightbox"><a href="#" class="close-bg"></a><a href="#" class="close-btn">&times;</a><img src="/images/travel/guizhou/guizhou4.jpg"></div>
<div id="gz5" class="lightbox"><a href="#" class="close-bg"></a><a href="#" class="close-btn">&times;</a><img src="/images/travel/guizhou/guizhou5.jpg"></div>
<div id="gz6" class="lightbox"><a href="#" class="close-bg"></a><a href="#" class="close-btn">&times;</a><img src="/images/travel/guizhou/guizhou6.jpg"></div>
<div id="gz7" class="lightbox"><a href="#" class="close-bg"></a><a href="#" class="close-btn">&times;</a><img src="/images/travel/guizhou/guizhou7.jpg"></div>
<div id="gz8" class="lightbox"><a href="#" class="close-bg"></a><a href="#" class="close-btn">&times;</a><img src="/images/travel/guizhou/guizhou8.jpg"></div>
<div id="gz9" class="lightbox"><a href="#" class="close-bg"></a><a href="#" class="close-btn">&times;</a><img src="/images/travel/guizhou/guizhou9.jpg"></div>

<div id="tw1" class="lightbox"><a href="#" class="close-bg"></a><a href="#" class="close-btn">&times;</a><img src="/images/travel/taiwan/taiwan1.jpg"></div>
<div id="tw2" class="lightbox"><a href="#" class="close-bg"></a><a href="#" class="close-btn">&times;</a><img src="/images/travel/taiwan/taiwan2.jpg"></div>

<div id="tw11" class="lightbox"><a href="#" class="close-bg"></a><a href="#" class="close-btn">&times;</a><img src="/images/travel/taiwan/taiwan11.jpg"></div>
<div id="tw12" class="lightbox"><a href="#" class="close-bg"></a><a href="#" class="close-btn">&times;</a><img src="/images/travel/taiwan/taiwan12.jpg"></div>
<div id="tw13" class="lightbox"><a href="#" class="close-bg"></a><a href="#" class="close-btn">&times;</a><img src="/images/travel/taiwan/taiwan13.jpg"></div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // The image zoom functionality is now handled by CSS.
    // This script only handles the slider drag and wheel scroll.
    const sliders = document.querySelectorAll('.slider-container');
    
    sliders.forEach(function(slider) {
      // Mouse wheel event for horizontal scrolling
      slider.addEventListener('wheel', function(e) {
        if (this.scrollWidth > this.clientWidth) {
            this.scrollLeft += e.deltaY;
        }
      }, { passive: true });
      
      // Mouse drag event for horizontal scrolling
      let isDragging = false;
      let startPosition;
      let scrollLeftStart;
      
      slider.addEventListener('mousedown', function(e) {
        if (e.button !== 0) return;
        isDragging = true;
        startPosition = e.pageX - this.offsetLeft;
        scrollLeftStart = this.scrollLeft;
        this.style.cursor = 'grabbing';
      });
      
      slider.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - this.offsetLeft;
        const walk = (x - startPosition) * 2;
        this.scrollLeft = scrollLeftStart - walk;
      });
      
      const stopDragging = () => {
        isDragging = false;
        if (slider) {
          slider.style.cursor = 'grab';
        }
      };

      slider.addEventListener('mouseup', stopDragging);
      slider.addEventListener('mouseleave', stopDragging);
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        // Find any open lightbox and close it by navigating to '#'
        if (window.location.hash) {
          window.location.hash = '#';
        }
      }
    });
  });
</script>