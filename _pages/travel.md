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

  .destination-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .destination-card {
    background: radial-gradient(circle at top left, #fdfbfb, #f1f4ff);
    border-radius: 16px;
    padding: 1.3rem 1.2rem;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease;
    border: 1px solid rgba(21, 101, 192, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .destination-card h3 {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  .destination-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.16);
    background: radial-gradient(circle at top left, #ffffff, #e3f2fd);
    border-color: rgba(21, 101, 192, 0.25);
  }

  .destination-card.active {
    border-color: #1565c0;
    box-shadow: 0 0 0 2px rgba(21, 101, 192, 0.25);
    background: radial-gradient(circle at top left, #ffffff, #e8f0ff);
  }

  @media (max-width: 600px) {
    .destination-card {
      padding: 1rem 0.9rem;
    }

    .destination-card h3 {
      font-size: 0.96rem;
    }
  }

  .trip-section {
    margin-bottom: 3rem;
    display: none;
  }

  .trip-section.active {
    display: block;
  }

  .trip-section h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 0.5rem;
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
  <div class="destination-grid">
    <div class="destination-card active" data-target="guizhou">
      <h3>Guizhou(貴州)</h3>
    </div>
    <div class="destination-card" data-target="taiwan">
      <h3>Taiwan(臺灣)</h3>
    </div>
  </div>

  <div class="trip-section active" id="guizhou">
    <h2>Guizhou(貴州)</h2>
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
      <h3 class="slider-title">紫雲天星榖</h3>
      <div class="slider-track">
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou41.jpg" alt="Scenery 6"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou30.jpg" alt="Scenery 1"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou39.jpg" alt="Scenery 4"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou40.jpg" alt="Scenery 5"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou31.jpg" alt="Scenery 2"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou32.jpg" alt="Scenery 3"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou33.jpg" alt="Scenery 4"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou35.jpg" alt="Scenery 6"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou38.jpg" alt="Scenery 3"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou43.jpg" alt="Scenery 3"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou36.jpg" alt="Scenery 1"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/guizhou45.jpg" alt="Scenery 5"></div>
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
      <h3 class="slider-title">Food</h3>
      <div class="slider-track">
        <div class="photo-card"><img src="/images/travel/guizhou/eat1.jpg" alt="Scenery 1"><div class="caption"><p>酸湯火鍋</p></div></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat8.jpg" alt="Scenery 6"><div class="caption"><p>酸湯火鍋</p></div></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat5.jpg" alt="Scenery 5"><div class="caption"><p>安順烤小腸</p></div></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat6.jpg" alt="Scenery 6"><div class="caption"><p>安順烤小腸</p></div></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat14.jpg" alt="Scenery 6"><div class="caption"><p>安順烤小腸</p></div></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat10.jpg" alt="Scenery 6"><div class="caption"><p>六盤水豆米火鍋</p></div></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat12.jpg" alt="Scenery 6"><div class="caption"><p>地攤火鍋</p></div></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat13.jpg" alt="Scenery 6"><div class="caption"><p>地攤火鍋</p></div></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat2.jpg" alt="Scenery 2"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat3.jpg" alt="Scenery 3"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat4.jpg" alt="Scenery 4"></div>
        <div class="photo-card"><img src="/images/travel/guizhou/eat7.jpg" alt="Scenery 6"></div>
      </div>
    </div>
  </div>

  <div class="trip-section" id="taiwan">
    <h2>Taiwan(臺灣)</h2>
    <div class="slider-container">
      <h3 class="slider-title">National Palace Museum (國立故宮博物院)</h3>
      <div class="slider-track">
        <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan1.jpg" alt="Museum">
        </div>
        <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan4.jpg" alt="">
        </div>
        <div class="photo-card">
          <img src="/images/travel/taiwan/taiwan2.jpg" alt="Jadeite Cabbage">
          <div class="caption"><p>Jadeite Cabbage (翠玉白菜)</p></div>
        </div>
        <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan3.jpg" alt="Museum">
            <div class="caption"><p>明 崇禎四年銘 青銅鎏金佛塔</p></div>
        </div>
        <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan5.jpg" alt="">
            <div class="caption"><p>象牙透雕套球（鬼工球）/ 雕象牙九層塔</p></div>
        </div>
        <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan6.jpg" alt="">
            <div class="caption"><p>清代宮廷家具</p></div>
        </div>
        <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan7.jpg" alt="">
            <div class="caption"><p>八仙雕像</p></div>
        </div>
        <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan8.jpg" alt="">
            <div class="caption"><p>珊瑚魁星點斗盆景</p></div>
        </div>
        <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan9.jpg" alt="">
            <div class="caption"><p>定窯 白瓷嬰兒枕</p></div>
        </div>
        <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan10.jpg" alt="">
            <div class="caption"><p>綠地魚龍圖花式瓶</p></div>
        </div>
        <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan100.jpg" alt="">
            <div class="caption"><p>「古稀天子之寶」玉璽/「八徵耄念之寶」玉璽</p></div>
        </div>
        <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan101.jpg" alt="">
            <div class="caption"><p>銅弩機/青銅方壺/環首小刀/...</p></div>
        </div>
        <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan102.jpg" alt="">
            <div class="caption"><p>硯台</p></div>
        </div>
        <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan103.jpg" alt="">
            <div class="caption"><p>嵌綠松石金屬絲犧尊</p></div>
        </div>
        <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan104.jpg" alt="">
            <div class="caption"><p>鎏金銅塔</p></div>
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

    // --- Destination switcher Logic ---
    const destinationCards = document.querySelectorAll('.destination-card');
    const tripSections = document.querySelectorAll('.trip-section');

    const showSection = (id) => {
      tripSections.forEach(section => {
        if (section.id === id) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });

      destinationCards.forEach(card => {
        if (card.dataset.target === id) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });

      const container = document.querySelector('.travel-log-container');
      if (container) {
        const top = container.offsetTop;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };

    destinationCards.forEach(card => {
      card.addEventListener('click', () => {
        const target = card.dataset.target;
        if (target) {
          showSection(target);
        }
      });
    });
  });
</script>