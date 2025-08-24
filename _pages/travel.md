---
layout: archive
title: "Travel"
permalink: /travel/
author_profile: true
---

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
    /* Increased vertical padding to give cards room to "pop out" */
    padding: 20px 10px;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    margin-bottom: 20px;
    scrollbar-color: #888 #f1f1f1;
    cursor: grab;
    /* Clip content to padding box to prevent scrollbar from overlapping content */
    overflow-clip-margin: content-box;
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
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .photo-card:hover {
    /* Scale up and lift the card to make it pop out */
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    z-index: 10; /* Ensure the hovered card is on top of others */
  }

  .photo-card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
    pointer-events: none;
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
  
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
  }

  .modal-content {
    margin: auto;
    display: block;
    max-width: 95%;
    max-height: 95%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
    z-index: 1001;
  }

  .close:hover, .close:focus { color: #bbb; text-decoration: none; }
</style>

<div class="travel-log-container">
  <!-- Trip sections remain the same -->
  <div class="trip-section">
    <h2>Guizhou(貴州) <span class="trip-date">2025.4</span></h2>
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
    <div class="slider-container">
      <h3 class="slider-title">烏蒙大草原</h3>
      <div class="slider-track">
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou11.jpg" alt="Scenery 1"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou12.jpg" alt="Scenery 2"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou13.jpg" alt="Scenery 3"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou14.jpg" alt="Scenery 4"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou15.jpg" alt="Scenery 5"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou16.jpg" alt="Scenery 6"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou17.jpg" alt="Scenery 7"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou18.jpg" alt="Scenery 8"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou10.jpg" alt="Scenery 8"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou19.jpg" alt="Scenery 8"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou20.jpg" alt="Scenery 8"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou21.jpg" alt="Scenery 8"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou22.jpg" alt="Scenery 8"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou23.jpg" alt="Scenery 8"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou24.jpg" alt="Scenery 8"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou25.jpg" alt="Scenery 8"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou26.jpg" alt="Scenery 8"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou27.jpg" alt="Scenery 8"></div>
      </div>
    </div>
    <div class="slider-container">
      <h3 class="slider-title">貴陽</h3>
      <div class="slider-track">
        <div class="photo-card"><img src="/images/travel/guizhou/guiyang1.jpg" alt="Scenery 1"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guiyang2.jpg" alt="Scenery 2"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guiyang3.jpg" alt="Scenery 3"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guiyang4.jpg" alt="Scenery 4"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guiyang5.jpg" alt="Scenery 5"><div class="caption"><p>甲秀樓</p></div></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guiyang6.jpg" alt="Scenery 6"></div>
      </div>
    </div>
    <div class="slider-container">
      <h3 class="slider-title">Eating</h3>
      <div class="slider-track">
        <div class="photo-card"><img src="/images/travel/guizhou/eat1.jpg" alt="Scenery 1"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat2.jpg" alt="Scenery 2"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat3.jpg" alt="Scenery 3"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat4.jpg" alt="Scenery 4"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat5.jpg" alt="Scenery 5"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat6.jpg" alt="Scenery 6"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat7.jpg" alt="Scenery 6"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat8.jpg" alt="Scenery 6"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat9.jpg" alt="Scenery 6"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat10.jpg" alt="Scenery 6"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat11.jpg" alt="Scenery 6"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat12.jpg" alt="Scenery 6"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat13.jpg" alt="Scenery 6"></div>
      </div>
    </div>
  </div>
    <!-- <div class="slider-container">
      <h3 class="slider-title">美食</h3>
      <div class="slider-track">
        <div class="photo-card"><img src="/images/travel/guizhou/guiyang1.jpg" alt="Scenery 1"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guiyang2.jpg" alt="Scenery 2"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guiyang3.jpg" alt="Scenery 3"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guiyang4.jpg" alt="Scenery 4"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guiyang5.jpg" alt="Scenery 5"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guiyang6.jpg" alt="Scenery 6"></div>
      </div>
    </div>
  </div> -->
  <div class="trip-section">
    <h2>Taiwan(臺灣) <span class="trip-date">2025.1</span></h2>
    <div class="slider-container">
      <h3 class="slider-title">National Palace Museum (國立故宮博物院)</h3>
      <div class="slider-track">
        <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan1.jpg" alt="Museum">
        </div>
        <div class="photo-card">
          <img src="/images/travel/taiwan/taiwan2.jpg" alt="Jadeite Cabbage">
          <div class="caption"><p>Jadeite Cabbage (翠玉白菜)</p></div>
        </div>
        <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan3.jpg" alt="Museum">
            <div class="caption"><p>Gilt Bronze Pagoda, Ming dynasty with inscription Chongzhen 4th year (明 崇禎四年銘 青銅鎏金佛塔)</p></div>
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
  // The script remains unchanged as all modifications were handled with CSS.
  document.addEventListener('DOMContentLoaded', function() {
    // --- Slider Drag and Wheel Scroll Logic ---
    const sliders = document.querySelectorAll('.slider-container');
    sliders.forEach(function(slider) {
      slider.addEventListener('wheel', (e) => { if (slider.scrollWidth > slider.clientWidth) slider.scrollLeft += e.deltaY; }, { passive: true });
      let isDragging = false, startPos, scrollLeft;
      slider.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        isDragging = true;
        startPos = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.cursor = 'grabbing';
      });
      slider.addEventListener('mouseleave', () => { isDragging = false; slider.style.cursor = 'grab'; });
      slider.addEventListener('mouseup', () => { isDragging = false; slider.style.cursor = 'grab'; });
      slider.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startPos) * 2;
        slider.scrollLeft = scrollLeft - walk;
      });
    });
    
    // --- Image Double-Click to Fullscreen Logic ---
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('#imageModal .close');
    const photoCards = document.querySelectorAll('.photo-card');

    const openFullScreen = (imgSrc) => {
      modalImg.src = imgSrc;
      modal.style.display = 'flex';
      
      const elem = modal;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    };

    const closeFullScreen = () => {
      if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }
      } else {
        modal.style.display = 'none';
      }
    };

    photoCards.forEach(card => {
      card.addEventListener('dblclick', function() {
        const img = this.querySelector('img');
        if (img) openFullScreen(img.src);
      });
    });

    closeBtn.addEventListener('click', closeFullScreen);

    const onFullScreenChange = () => {
      const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!isFullscreen) {
        modal.style.display = 'none';
      }
    };

    document.addEventListener('fullscreenchange', onFullScreenChange);
    document.addEventListener('webkitfullscreenchange', onFullScreenChange);
    document.addEventListener('msfullscreenchange', onFullScreenChange);
  });
</script>