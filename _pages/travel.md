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
    overflow-x: auto;  /* 启用水平滚动 */
    padding: 10px;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    margin-bottom: 20px;
    scrollbar-width: none;  /* 隐藏Firefox滚动条 */
    -ms-overflow-style: none;  /* 隐藏IE滚动条 */
  }
  
  /* 隐藏Chrome滚动条 */
  .slider-container::-webkit-scrollbar {
    display: none;
  }

  .slider-track {
    display: flex;
    gap: 15px;
    user-select: none;
    padding-bottom: 5px;
  }

  .photo-card {
    flex: 0 0 320px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    cursor: pointer;
    position: relative;
  }

  .photo-card:hover {
    transform: translateY(-3px);
  }

  .photo-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
  }
  
  .zoom-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0,0,0,0.5);
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .photo-card:hover .zoom-icon {
    opacity: 1;
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
  
  .scroll-hint {
    text-align: center;
    font-size: 0.8rem;
    color: #999;
    margin-top: 5px;
    font-style: italic;
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
    overflow: auto;
  }

  .modal-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 90%;
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
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
  }
</style>

<div class="travel-log-container">

  <div class="trip-section">
    <h2>Guizhou(贵州) <span class="trip-date">2025.4</span></h2>
    <div class="scroll-hint">滑动或使用鼠标滚轮浏览更多图片</div>
    <div class="slider-container">
      <h3 class="slider-title">黔西三江古道</h3>
      <div class="slider-track">
        <div class="photo-card">
          <div class="zoom-icon">🔍</div>
          <img src="/images/travel/guizhou/guizhou1.jpg" alt="">
        </div>
        <div class="photo-card">
          <div class="zoom-icon">🔍</div>
          <img src="/images/travel/guizhou/guizhou2.jpg" alt="">
        </div>
        <div class="photo-card">
          <div class="zoom-icon">🔍</div>
          <img src="/images/travel/guizhou/guizhou3.jpg" alt="">
        </div>
        <div class="photo-card">
          <div class="zoom-icon">🔍</div>
          <img src="/images/travel/guizhou/guizhou4.jpg" alt="">
        </div>
        <div class="photo-card">
          <div class="zoom-icon">🔍</div>
          <img src="/images/travel/guizhou/guizhou5.jpg" alt="">
        </div>
        <div class="photo-card">
          <div class="zoom-icon">🔍</div>
          <img src="/images/travel/guizhou/guizhou6.jpg" alt="">
        </div>
        <div class="photo-card">
          <div class="zoom-icon">🔍</div>
          <img src="/images/travel/guizhou/guizhou7.jpg" alt="">
        </div>
        <div class="photo-card">
          <div class="zoom-icon">🔍</div>
          <img src="/images/travel/guizhou/guizhou8.jpg" alt="">
        </div>
        <div class="photo-card">
          <div class="zoom-icon">🔍</div>
          <img src="/images/travel/guizhou/guizhou9.jpg" alt="">
        </div>
      </div>
    </div>
  </div>

  <div class="trip-section">
    <h2>Taiwan(臺灣) <span class="trip-date">2025.1</span></h2>
    <div class="scroll-hint">滑动或使用鼠标滚轮浏览更多图片</div>
    <div class="slider-container">
      <h3 class="slider-title">National Palace Museum (國立故宮博物院)</h3>
      <div class="slider-track">
        <div class="photo-card">
          <div class="zoom-icon">🔍</div>
          <img src="/images/travel/taiwan/taiwan1.jpg" alt="National Palace Museum">
        </div>
        <div class="photo-card">
          <div class="zoom-icon">🔍</div>
          <img src="/images/travel/taiwan/taiwan2.jpg" alt="Jadeite Cabbage">
          <div class="caption"><p>Jadeite Cabbage (翠玉白菜)</p></div>
        </div>
      </div>
    </div>
    <div class="slider-container">
      <h3 class="slider-title">National Revolutionary Martyrs' Shrine (国民革命忠烈祠)</h3>
      <div class="slider-track">
        <div class="photo-card">
          <div class="zoom-icon">🔍</div>
          <img src="/images/travel/taiwan/taiwan11.jpg" alt="National Revolutionary Martyrs' Shrine">
        </div>
        <div class="photo-card">
          <div class="zoom-icon">🔍</div>
          <img src="/images/travel/taiwan/taiwan12.jpg" alt="National Revolutionary Martyrs' Shrine">
        </div>
        <div class="photo-card">
          <div class="zoom-icon">🔍</div>
          <img src="/images/travel/taiwan/taiwan13.jpg" alt="National Revolutionary Martyrs' Shrine">
        </div>
      </div>
    </div>
  </div>

</div>

<!-- 图片放大的模态框 -->
<div id="imageModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="modalImage">
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // 处理滚轮和鼠标滑动事件
    const sliders = document.querySelectorAll('.slider-container');
    
    sliders.forEach(function(slider) {
      // 鼠标滚轮事件
      slider.addEventListener('wheel', function(e) {
        e.preventDefault();
        this.scrollLeft += e.deltaY;
      }, { passive: false });
      
      // 鼠标拖动事件
      let isDragging = false;
      let startPosition;
      let scrollLeftStart;
      
      slider.addEventListener('mousedown', function(e) {
        isDragging = true;
        startPosition = e.pageX;
        scrollLeftStart = this.scrollLeft;
        this.style.cursor = 'grabbing';
      });
      
      slider.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
        const distance = e.pageX - startPosition;
        this.scrollLeft = scrollLeftStart - distance;
      });
      
      slider.addEventListener('mouseup', function() {
        isDragging = false;
        this.style.cursor = 'grab';
      });
      
      slider.addEventListener('mouseleave', function() {
        isDragging = false;
        this.style.cursor = 'grab';
      });
    });
    
    // 图片点击放大功能
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close')[0];
    const images = document.querySelectorAll('.photo-card img');
    
    images.forEach(function(img) {
      img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
      });
    });
    
    // 关闭模态框
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
    
    // 按ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        modal.style.display = 'none';
      }
    });
  });
</script>