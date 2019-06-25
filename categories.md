---
layout: page
title: Archive
---

<section>
  {% if site.posts[0] %}
    {%for cate in site.categories %}
        <h3>{{ cate[0]}}</h3>
         <ul class="tags-expo-posts">
            {% for post in cate[1] %}
              <a class="post-title" href="{{ post.url | prepend: site.baseurl | replace: '//', '/' }}">
            <li>
              {{ post.title }}
            <small class="post-date">{{ post.date | date_to_string }}</small>
            </li>
            </a>
            {% endfor %}
          </ul>
    {% endfor %}    

  {% endif %}
</section>