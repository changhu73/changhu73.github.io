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

  /* Theme `.page__content h2` adds a bottom border — remove on trip cards */
  .travel-log-container .trip-card-title {
    border-bottom: none !important;
    padding-bottom: 0 !important;
    margin-top: 0 !important;
  }

  .trip-overview-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    margin-bottom: 2.5rem;
    position: relative;
    z-index: 2;
    align-items: stretch;
  }

  .trip-card-link {
    text-decoration: none !important;
    color: inherit;
    display: flex;
    min-height: 0;
    border-bottom: none !important;
  }

  .trip-card-link:hover,
  .trip-card-link:focus {
    text-decoration: none !important;
    border-bottom: none !important;
  }

  .trip-card {
    position: relative;
    z-index: 1;
    flex: 1;
    width: 100%;
    min-height: 7.5rem;
    box-sizing: border-box;
    background: radial-gradient(circle at top left, #fffaf5 0, #ffffff 40%, #f5f7ff 100%);
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.10);
    padding: 1.25rem 1rem;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(6px);
    transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    font-size: clamp(1.05rem, 2.4vw, 1.35rem);
    font-weight: 600;
    margin: 0;
    letter-spacing: 0.03em;
    width: 100%;
    max-width: 100%;
    text-align: center;
    line-height: 1.35;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-break: break-word;
    overflow-wrap: anywhere;
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
    <a class="trip-card-link" href="/travel/guizhou/" title="Guizhou(貴州)">
      <div class="trip-card">
        <h2 class="trip-card-title">Guizhou(貴州)</h2>
      </div>
    </a>
    <a class="trip-card-link" href="/travel/taiwan/" title="Taiwan(臺灣)">
      <div class="trip-card">
        <h2 class="trip-card-title">Taiwan(臺灣)</h2>
      </div>
    </a>
    <a class="trip-card-link" href="/travel/ulanqab/" title="Ulanqab(內蒙古-烏蘭察布)">
      <div class="trip-card">
        <h2 class="trip-card-title">Ulanqab(內蒙古-烏蘭察布)</h2>
      </div>
    </a>
    <a class="trip-card-link" href="/travel/datong/" title="Datong(山西-大同)">
      <div class="trip-card">
        <h2 class="trip-card-title">Datong(山西-大同)</h2>
      </div>
    </a>
  </div>
</div>