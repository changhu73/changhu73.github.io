---
layout: single
author_profile: true
---


<!-- <div class="welcome-section" style="margin-bottom: 2em; padding: 1.5em; border-radius: 8px; background-color: #f8f9fa; border-left: 4px solid #4e73df;">
  <h2 style="margin-top: 0; color: #2e4765; border-bottom: 1px solid #eee; padding-bottom: 0.5em;">
    Welcome to My Academic Profile!
  </h2>
  
  <div style="margin-bottom: 1.2em;">
    <p style="font-size: 1.1em; color: #444; line-height: 1.6;">
      I'm actively pursuing <strong>Ph.D. positions</strong> commencing in <span style="background-color: #e3f2fd; padding: 0.2em 0.5em; border-radius: 4px;">Spring/Fall 2026</span>.
    </p>
  </div>
  
  <div style="margin-bottom: 1.5em; background: white; padding: 1em; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h3 style="color: #2c3e50; margin-top: 0;">Research Focus</h3>
    <p style="font-size: 1.1em; color: #444; line-height: 1.6;">
      Specializing in <strong>Large Language Models (LLMs)</strong>, 
      <strong>AI for Software Engineering (AI4SE)</strong>, and 
      <strong>AI for Security (AI4Security)</strong> with one year of focused expertise in:
    </p>
    <ul style="padding-left: 1.5em; font-size: 1.1em;">
      <li style="margin-bottom: 0.5em;"><strong>LLM Trustworthiness</strong> - Robustness, security and reliability frameworks</li>
      <li><strong>LLM for Business Applications (LLM4Business)</strong> - Enterprise solutions and process enhancement</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 1.5em;">
    <h3 style="color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 0.3em;">Technical Competencies</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1em; margin-top: 1em;">
      <div style="background: white; padding: 1em; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <h4 style="margin-top: 0; color: #4e73df;">🤖 AI Development</h4>
        <p style="margin-bottom: 0;">Highly proficient in AI tools for code generation, debugging, and task automation</p>
      </div>
      <div style="background: white; padding: 1em; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <h4 style="margin-top: 0; color: #4e73df;">📝 Research Communication</h4>
        <p style="margin-bottom: 0;">Expert technical writing and impactful research visualization</p>
      </div>
      <div style="background: white; padding: 1em; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <h4 style="margin-top: 0; color: #4e73df;">🔬 Core Research</h4>
        <p style="margin-bottom: 0;">Hands-on experience in LLM evaluation and business process enhancement</p>
      </div>
    </div>
  </div>

</div> -->







<style>
  .home-container {
    max-width: 100%;
    margin: 0 auto;
  }
  
  .page-summary {
    margin-bottom: 2em;
    padding: 1.5em;
    background: #ffffff;
    border-radius: 8px;
    border-left: 3px solid #2c3e50;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
  }
  
  .page-summary:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transform: translateY(-2px);
  }
  
  .page-summary h2 {
    margin: 0 0 1em 0;
    padding-bottom: 0.5em;
    border-bottom: 2px solid #e2e8f0;
    font-size: 1.5em;
    font-weight: 600;
  }
  
  .page-summary h2 a {
    color: #2c3e50;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  .page-summary h2 a:hover {
    color: #1a202c;
  }
  
  .page-content {
    line-height: 1.7;
    color: #4a5568;
  }
  
  .page-content ul {
    margin: 0.5em 0;
    padding-left: 1.5em;
  }
  
  .page-content ul li {
    margin: 0.5em 0;
    padding: 0.3em 0;
  }
  
  .page-content a {
    color: #3182ce;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.2s ease;
  }
  
  .page-content a:hover {
    color: #2c5282;
    border-bottom-color: #3182ce;
  }
  
  .page-content b {
    color: #2d3748;
    font-weight: 600;
  }
  
  .page-content i {
    color: #718096;
  }
  
  .wordwrap {
    margin-top: 1.5em;
    padding: 1em;
    background: #f7fafc;
    border-radius: 6px;
    text-align: center;
    border-left: 3px solid #4299e1;
  }
  
  .wordwrap a {
    color: #3182ce;
    font-weight: 500;
  }
  
  .clustrmaps-container {
    margin: 2em 0;
    padding: 1.5em;
    background: #f7fafc;
    border-radius: 8px;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    .page-summary {
      padding: 1em;
      margin-bottom: 1.5em;
    }
    
    .page-summary h2 {
      font-size: 1.3em;
    }
  }
</style>

<div class="home-container">

{% for item in site.data.navigation.main %}
  {% assign p = site.pages | where: "url", item.url | first %}
  {% if p and p.name != "travel.md" %}
    <section id="{{ item.title | slugify }}" class="page-summary">
      <h2>
        <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
      </h2>
      <div class="page-content">
        {{ p.content | remove: '<h2>' | remove: '</h2>' }}
      </div>
    </section>
  {% endif %}
{% endfor %}

<div class="clustrmaps-container">
  <script type="text/javascript" id="clustrmaps" src="https://clustrmaps.com/map_v2.js?d=TtQYZYFrk87LEWmUBSwoKSS3gQYl6vR5iALr2DB9cO4&cl=ffffff&w=a"></script>
</div>

</div>
