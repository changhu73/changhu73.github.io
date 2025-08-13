---
layout: single
author_profile: true
---


<div class="welcome-section" style="margin-bottom: 2em; padding: 1.5em; border-radius: 8px; background-color: #f8f9fa; border-left: 4px solid #4e73df;">
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
  
  <div style="background: #e8f4f8; padding: 1em; border-radius: 6px;">
    <h3 style="color: #2c3e50; margin-top: 0;">Education</h3>
    <ul style="padding-left: 1.5em; font-size: 1.1em;">
      <li style="margin-bottom: 0.5em;">
        <strong>M.Sc. Computer Science</strong><br>
        City University of Hong Kong (CityU) · Completion imminent
      </li>
      <li>
        <strong>B.Sc. Information Security</strong><br>
        University of Science and Technology of China (USTC)
      </li>
    </ul>
  </div>
</div>



<div class="welcome-section" style="margin-bottom: 2em; padding-bottom: 1em; border-bottom: 1px solid #eee;">

{% for item in site.data.navigation.main %}
  {% assign p = site.pages | where: "url", item.url | first %}
  {% if p %}
    <section id="{{ item.title | slugify }}" class="page-summary" style="margin-bottom: 3em;">
      
      <h2 style="border-bottom: 2px solid #000; padding-bottom: 0.5em; margin-top: 2em;">
        <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
      </h2>

      <div class="page-content">
        {{ p.content | remove: '<h2>' | remove: '</h2>' }}
      </div>

    </section>
  {% endif %}
{% endfor %}



<div style="display: flex; justify-content: center; margin: 2em 0;">
  <a href="https://clustrmaps.com/site/1c7ct" title="ClustrMaps">
    <img src="//www.clustrmaps.com/map_v2.png?d=TtQYZYFrk87LEWmUBSwoKSS3gQYl6vR5iALr2DB9cO4&cl=ffffff" />
  </a>
</div>
