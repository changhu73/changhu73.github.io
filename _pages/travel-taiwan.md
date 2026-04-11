---
layout: archive
title: "Taiwan(臺灣)"
permalink: /travel/taiwan/
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

  .back-to-overview {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 1rem;
    padding: 6px 14px;
    font-size: 0.9rem;
    color: #555;
    background: #f5f5f5;
    border-radius: 999px;
    border: 1px solid #e0e0e0;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  }

  .back-to-overview:hover {
    background: #eaeaea;
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  }

  .back-to-overview::before {
    content: '↩';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #ffffff;
    color: #666;
    font-size: 0.85rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.18);
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
    padding: 20px 10px;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    margin-bottom: 20px;
    scrollbar-color: #888 #f1f1f1;
    cursor: grab;
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
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    z-index: 10;
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
  <a class="back-to-overview" href="/travel/">Back to overview</a>

  <div class="trip-section">
    <h2>Taiwan(臺灣)</h2>

    <div class="slider-container">
      <h3 class="slider-title">National Palace Museum (國立故宮博物院)</h3>
      <div class="slider-track">
        <div class="photo-card"><img src="/images/travel/taiwan/taiwan1.jpg" alt="Museum"></div>
        <div class="photo-card"><img src="/images/travel/taiwan/taiwan4.jpg" alt=""></div>
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

{% raw %}
<script>
(function () {
  function initTaiwanTravel() {
    var root = document.querySelector('.travel-log-container');
    if (!root) return;

    var sliders = root.querySelectorAll('.slider-container');
    sliders.forEach(function (slider) {
      slider.addEventListener(
        'wheel',
        function (e) {
          if (slider.scrollWidth > slider.clientWidth) slider.scrollLeft += e.deltaY;
        },
        { passive: true }
      );
      var isDragging = false;
      var startPos;
      var scrollLeft;
      slider.addEventListener('mousedown', function (e) {
        if (e.button !== 0) return;
        isDragging = true;
        startPos = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.cursor = 'grabbing';
      });
      slider.addEventListener('mouseleave', function () {
        isDragging = false;
        slider.style.cursor = 'grab';
      });
      slider.addEventListener('mouseup', function () {
        isDragging = false;
        slider.style.cursor = 'grab';
      });
      slider.addEventListener('mousemove', function (e) {
        if (!isDragging) return;
        e.preventDefault();
        var x = e.pageX - slider.offsetLeft;
        var walk = (x - startPos) * 2;
        slider.scrollLeft = scrollLeft - walk;
      });
    });

    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImage');
    var closeBtn = document.querySelector('#imageModal .close');
    var photoCards = root.querySelectorAll('.photo-card');

    if (!modal || !modalImg) return;

    function openFullScreen(imgSrc) {
      modalImg.src = imgSrc;
      modal.style.display = 'flex';
      if (modal.requestFullscreen) {
        modal.requestFullscreen();
      } else if (modal.webkitRequestFullscreen) {
        modal.webkitRequestFullscreen();
      } else if (modal.msRequestFullscreen) {
        modal.msRequestFullscreen();
      }
    }

    function closeFullScreen() {
      if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        modal.style.display = 'none';
      }
    }

    photoCards.forEach(function (card) {
      card.addEventListener('dblclick', function () {
        var img = this.querySelector('img');
        if (img) openFullScreen(img.src);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeFullScreen);

    function onFullScreenChange() {
      var isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      if (!isFullscreen) {
        modal.style.display = 'none';
      }
    }

    document.addEventListener('fullscreenchange', onFullScreenChange);
    document.addEventListener('webkitfullscreenchange', onFullScreenChange);
    document.addEventListener('msfullscreenchange', onFullScreenChange);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTaiwanTravel);
  } else {
    initTaiwanTravel();
  }
})();
</script>
{% endraw %}

