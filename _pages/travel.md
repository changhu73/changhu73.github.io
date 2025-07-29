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
    cursor: pointer;
  }

  .photo-card:hover {
    transform: translateY(-3px);
  }

  .photo-card img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    display: block;
    pointer-events: none; /* Prevent image's default drag behavior */
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
  
  /* Modal styles */
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    overflow: auto;
    animation: fadeIn 0.3s;
  }
  
  @keyframes fadeIn { from {opacity: 0;} to {opacity: 1;} }

  .modal-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: zoomIn 0.3s;
  }

  @keyframes zoomIn { from {transform: translate(-50%, -50%) scale(0.8);} to {transform: translate(-50%, -50%) scale(1);} }

  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
  }

  .close:hover, .close:focus { color: #bbb; text-decoration: none; }
</style>

<div class="travel-log-container">

  <div class="trip-section">
    <h2>Guizhou(贵州) <span class="trip-date">2025.4</span></h2>
    <div class="slider-container">
      <h3 class="slider-title">黔西三江古道</h3>
      <div class="slider-track">
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou1.jpg" alt="Scenery 1"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou2.jpg" alt="Scenery 2"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou3.jpg" alt="Scenery 3"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou4.jpg" alt="Scenery 4"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou5.jpg" alt="Scenery 5"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou6.jpg" alt="Scenery 6"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou7.jpg" alt="Scenery 7"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou8.jpg" alt="Scenery 8"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou9.jpg" alt="Scenery 9"></div>
      </div>
    </div>
  </div>

  <div class="trip-section">
    <h2>Taiwan(臺灣) <span class="trip-date">2025.1</span></h2>
    <div class="slider-container">
      <h3 class="slider-title">National Palace Museum (國立故宮博物院)</h3>
      <div class="slider-track">
        <div class="photo-card"><img src="/images/travel/taiwan/taiwan1.jpg" alt="Museum"></div>
        <div class="photo-card">
          <img src="/images/travel/taiwan/taiwan2.jpg" alt="Jadeite Cabbage">
          <div class="caption"><p>Jadeite Cabbage (翠玉白菜)</p></div>
        </div>
      </div>
    </div>
    <div class="slider-container">
      <h3 class="slider-title">National Revolutionary Martyrs' Shrine (國民革命忠烈祠)</h3>
      <div class="slider-track">
        <div class="photo-card"><img src="/images/travel/taiwan/taiwan11.jpg" alt="Shrine 1"></div>
        <div class="photo-card"><img src="/images/travel/taiwan/taiwan12.jpg" alt="Shrine 2"></div>
        <div class="photo-card"><img src="/images/travel/taiwan/taiwan13.jpg" alt="Shrine 3"></div>
      </div>
    </div>
  </div>

</div>

<!-- Image Modal -->
<div id="imageModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="modalImage">
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // --- Slider Drag and Wheel Scroll Logic ---
    const sliders = document.querySelectorAll('.slider-container');
    sliders.forEach(function(slider) {
      slider.addEventListener('wheel', function(e) {
        if (this.scrollWidth > this.clientWidth) {
          this.scrollLeft += e.deltaY;
        }
      }, { passive: true });
      
      let isDragging = false;
      let startPosition, scrollLeftStart;
      
      slider.addEventListener('mousedown', function(e) {
        if (e.button !== 0) return; // Only for left button
        isDragging = true;
        startPosition = e.pageX - this.offsetLeft;
        scrollLeftStart = this.scrollLeft;
        this.style.cursor = 'grabbing';
      });
      
      const stopDragging = () => {
        isDragging = false;
        if (slider) slider.style.cursor = 'grab';
      };

      slider.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - this.offsetLeft;
        const walk = (x - startPosition) * 2;
        this.scrollLeft = scrollLeftStart - walk;
      });
      
      slider.addEventListener('mouseup', stopDragging);
      slider.addEventListener('mouseleave', stopDragging);
    });
    
    // --- Image Click-to-Enlarge Logic ---
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('#imageModal .close');
    const photoCards = document.querySelectorAll('.photo-card');
    
    photoCards.forEach(function(card) {
      let isDraggingOnCard = false;
      let cardMouseDownX;

      card.addEventListener('mousedown', function(e) {
          if (e.button !== 0) return; // Only for left button
          cardMouseDownX = e.clientX;
          isDraggingOnCard = false;
      });

      card.addEventListener('mousemove', function(e) {
          // If mouse moves more than a few pixels, we consider it a drag
          if (Math.abs(e.clientX - cardMouseDownX) > 5) {
              isDraggingOnCard = true;
          }
      });

      card.addEventListener('mouseup', function(e) {
          // Only open modal if it was a left-click and not a drag
          if (!isDraggingOnCard && e.button === 0) {
              const img = this.querySelector('img');
              if (img) {
                  modal.style.display = 'block';
                  modalImg.src = img.src;
              }
          }
      });
    });
    
    const closeModal = () => {
      modal.style.display = 'none';
    };

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  });
</script>