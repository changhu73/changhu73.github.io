---
layout: home
author_profile: true
---

# 欢迎来到 Guangwei Zhang 的个人网站

我是香港大学的研究助理。欢迎浏览我的学术和专业成果。

## 最新出版物

{% include feature_row id="feature_row_publications" %}

<div class="grid__wrapper">
  {% for post in site.publications limit:3 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

[查看所有出版物](/publications/){: .btn .btn--primary}

## 教学经历

<div class="grid__wrapper">
  {% for post in site.teaching limit:3 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

[查看所有教学经历](/teaching/){: .btn .btn--primary}

## 个人简历

我的研究兴趣包括...

[查看完整简历](/cv/){: .btn .btn--primary}

## 旅行足迹

<div class="grid__wrapper">
  {% if site.talks %}
    {% for post in site.talks limit:2 %}
      {% include archive-single.html type="grid" %}
    {% endfor %}
  {% endif %}
</div>

[查看旅行记录](/travel/){: .btn .btn--primary}