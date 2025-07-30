---
layout: single
author_profile: true
---


<!-- <div class="welcome-section" style="margin-bottom: 2em; padding-bottom: 1em; border-bottom: 1px solid #eee;">
  
  
  <p style="font-size: 1.2em; color: #555; margin-top: 0;">
  Welcome to my page! 
  I completed my undergraduate studies in Information Security at the University of Science and Technology of China (USTC) and will soon be completing my master's degree in Computer Science at the City University of Hong Kong (CityU). 
  I am passionate about applying data science techniques to the business world and am actively seeking opportunities in this exciting, cross-disciplinary field.
  </p>


</div> -->



<div class="welcome-section" style="margin-bottom: 2em; padding-bottom: 1em; border-bottom: 1px solid #eee;">

{% for item in site.data.navigation.main %}
  {% assign p = site.pages | where: "url", item.url | first %}
  {% if p %}
    <section id="{{ item.title | slugify }}" class="page-summary" style="margin-bottom: 3em;">
      
      <h1 style="border-bottom: 2px solid #000; padding-bottom: 0.5em; margin-top: 2em;">
        <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
      </h1>

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
