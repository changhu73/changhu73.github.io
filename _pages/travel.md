---
layout: archive
title: "Travel"
permalink: /travel/
author_profile: true
---

{% include base_path %}

<!-- The following code adds custom styles for the travel sliders and image modal. -->
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
    flex-direction: column;
  }

  .slider-track-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #444;
    text-align: center;
  }

  .slider-images {
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
    cursor: pointer; /* Indicates the image is clickable */
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

  .photo-card .zoom-btn {
    margin-top: 10px;
    display: inline-block;
    padding: 5px 10px;
    font-size: 0.8rem;
    color: #fff;
    background-color: #007bff;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
  }

  .photo-card .zoom-btn:hover {
    background-color: #0056b3;
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

  /* NEW STYLES: For the Image Modal (Lightbox) */
  .modal {
    display: none; 
    position: fixed; 
    z-index: 1000; 
    padding-top: 50px; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgba(0,0,0,0.9);
  }

  .modal-content {
    margin: auto;
    display: block;
    width: auto;
    max-width: 85%;
    max-height: 80vh;
    animation-name: zoom;
    animation-duration: 0.5s;
  }
  
  .modal-caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 15px 0;
    font-size: 1.1rem;
  }

  @keyframes zoom {
    from {transform:scale(0.5)}
    to {transform:scale(1)}
  }

  .close-modal {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }

  .close-modal:hover,
  .close-modal:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
</style>

<!-- This is the main HTML content for your travel page. -->
<div class="travel-log-container">

  <!-- Trip 1: Taiwan -->
  <div class="trip-section">
    <h2>Taiwan <span class="trip-date">2025.1</span></h2>
    <h3 class="slider-title">Highlights from Taiwan Trip</h3>
    <div class="slider-container">
      <div class="slider-track">
        <h4 class="slider-track-title">Taiwan's Cultural Gems</h4>
        <div class="slider-images">
          <!-- All photos for this trip are now in one slider -->
          <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan1.jpg" alt="National Palace Museum">
            <div class="caption"><p>National Palace Museum (國立故宮博物院)</p></div>
            <a class="zoom-btn" href="#">放大查看</a>
          </div>
          <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan2.jpg" alt="Jadeite Cabbage">
            <div class="caption"><p>Jadeite Cabbage (翠玉白菜)</p></div>
            <a class="zoom-btn" href="#">放大查看</a>
          </div>
          <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan11.jpg" alt="National Revolutionary Martyrs' Shrine">
            <div class="caption"><p>National Revolutionary Martyrs' Shrine (国民革命忠烈祠)</p></div>
            <a class="zoom-btn" href="#">放大查看</a>
          </div>
          <div class="photo-card">
            <img src="/images/travel/taiwan/taiwan12.jpg" alt="National Revolutionary Martyrs' Shrine">
            <div class="caption"><p>National Revolutionary Martyrs' Shrine (国民革命忠烈祠)</p></div>
            <a class="zoom-btn" href="#">放大查看</a>
          </div>
          <!-- To add more photos to this trip, copy a photo-card block and paste it here. -->
        </div>
      </div>
    </div>
  </div>
  
  <!-- To add a new trip, copy an entire .trip-section block and paste it here. -->

</div>

<!-- NEW HTML: Modal for viewing images -->
<div id="imageModal" class="modal">
  <span class="close-modal">&times;</span>
  <img class="modal-content" id="modalImage">
  <div id="modalCaption" class="modal-caption"></div>
</div>


<!-- This script enables the drag-to-scroll functionality and the image modal. -->
<script>
  document.addEventListener('DOMContentLoaded', (event) => {
    // --- Slider Functionality ---
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
      slider.addEventListener('mouseleave', () => { isDown = false; slider.classList.remove('active'); });
      slider.addEventListener('mouseup', () => { isDown = false; slider.classList.remove('active'); });
      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
      });
    });

    // --- NEW: Modal Functionality ---
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");
    const images = document.querySelectorAll('.photo-card img');
    const closeModal = document.querySelector(".close-modal");

    images.forEach(img => {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            // Get caption from the sibling .caption element
            modalCaption.innerHTML = this.nextElementSibling.innerHTML;
        }
    });

    // Function to close the modal
    const closeModalAction = function() {
        modal.style.display = "none";
    }
    
    // Close when clicking the 'x'
    closeModal.onclick = closeModalAction;
    
    // Close when clicking the background
    modal.onclick = function(e) {
        if (e.target === modal) {
           closeModalAction();
        }
    }
  });
</script>