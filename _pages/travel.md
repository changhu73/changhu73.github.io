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

  .trip-overview-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-bottom: 2.5rem;
    position: relative;
    z-index: 2;
  }

  .trip-card-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .trip-card {
    position: relative;
    z-index: 1;
    background: radial-gradient(circle at top left, #fffaf5 0, #ffffff 40%, #f5f7ff 100%);
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.10);
    padding: 20px 18px;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(6px);
    transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .trip-card:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 18px 40px rgba(0,0,0,0.22);
    background: radial-gradient(circle at top left, #ffe9d2 0, #ffffff 40%, #e3e8ff 100%);
    border-color: rgba(255, 162, 100, 0.7);
  }

  .trip-card-title {
    position: relative;
    z-index: 1;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    letter-spacing: 0.03em;
    pointer-events: none;
  }

  .trip-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(circle at 0 0, rgba(255,255,255,0.6), transparent 55%);
    pointer-events: none;
    opacity: 0.9;
    mix-blend-mode: screen;
  }
</style>

<div class="travel-log-container">
  <div class="trip-overview-grid">
    <a class="trip-card-link" href="/travel/guizhou/">
      <div class="trip-card">
        <h2 class="trip-card-title">Guizhou(貴州)</h2>
      </div>
    </a>
    <a class="trip-card-link" href="/travel/taiwan/">
      <div class="trip-card">
        <h2 class="trip-card-title">Taiwan(臺灣)</h2>
      </div>
    </a>
  </div>
</div>