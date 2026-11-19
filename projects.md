---
layout: guide
title: Impact Initiatives 2026 - Bitcoin Design Community
nav_title: Projects
description: Ambitious design projects to dramatically improve bitcoin. Grants available from Spiral for designers ready to lead open-source bitcoin product design.
permalink: /projects/
main_nav: true
nav_order: 4
main_classes: -no-top-padding
body_class: theme-projects
image: /assets/images/projects/og-twitter.png
---

<!--

Editor's notes

Header illustration source:
https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=1127%3A7710

-->

<div class="creative-block-hero">
  <div class="creative-block-hero__year">'26</div>
  <div class="creative-block-hero__title">
    <span class="creative-block-hero__word">Impact</span>
    <span class="creative-block-hero__word">Initiatives</span>
  </div>
</div>

<div class="hero-image-reveal -full-width">
  <div class="hero-image-overlay"></div>
  {% include picture.html
     image = "/assets/images/projects/banner-desktop.png"
     retina = "/assets/images/projects/banner-desktop@2x.png"
     mobile = "/assets/images/projects/banner-mobile.png"
     mobileRetina = "/assets/images/projects/banner-mobile@2x.png"
     alt-text = "Impact Initiatives illustration"
     width = 1220
     height = 600
     layout = "full-width"
  %}
</div>

<section class="intro-text" id="intro-text">
  <p>These design initiatives can have a giant impact on bitcoin, and thus, on the world. It is a big ambitious slate of work, one for which we need incredible designers to lean in to help us explore, to create and to lead the charge with us. Bitcoin is money for everyone. But it is also yours—what will you design it to be?</p>
</section>

<div class="projects-toc">
  <div class="projects-toc__grid">
    {% for project in site.data.projects.projects %}
    <a href="#project-{{ project.id }}" class="projects-toc__item">
      <div class="projects-toc__image" style="background-color: {{ project.color }};">
        <img src="/assets/images/projects/{{ project.image }}" alt="">
      </div>
      <div class="projects-toc__content">
        <span class="projects-toc__number">{{ forloop.index | prepend: '00' | slice: -2, 2 }}</span>
        <div class="projects-toc__title">{{ project.title }}</div>
      </div>
    </a>
    {% endfor %}
  </div>
</div>

<div class="projects-grid">
  {% for project in site.data.projects.projects %}
  <div class="project-card" id="project-{{ project.id }}">
    <div class="project-card__main">
      <div class="project-card__content">
        <span class="project-card__number">{{ forloop.index | prepend: '00' | slice: -2, 2 }}</span>
        <div class="project-card__title">{{ project.title }}</div>
        <div class="project-card__desc">{{ project.long_description | markdownify }}</div>
      </div>
      <div class="project-card__image" style="background-color: {{ project.color }};">
        <img src="/assets/images/projects/{{ project.image }}" alt="">
      </div>
    </div>
    <div class="project-card__meta">
      <div class="project-card__meta-row">
        <span class="project-card__meta-label">Key People</span>
        <span class="project-card__meta-value">{% for person in project.key_people %}{% if person.url %}<a href="{{ person.url }}" target="_blank">{{ person.handle }}</a>{% else %}{{ person.handle }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}</span>
      </div>
      <div class="project-card__meta-row">
        <span class="project-card__meta-label">Status</span>
        <span class="project-card__status-pill">{{ project.status }}</span>
      </div>
      {% if project.connect %}
      <div class="project-card__meta-row">
        <span class="project-card__meta-label">Join the discussion</span>
        <span class="project-card__meta-value">{% if project.connect.url %}<a href="{{ project.connect.url }}">{{ project.connect.channel }}</a>{% else %}{{ project.connect.channel }}{% endif %}</span>
      </div>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

**Funding**

*For any designers wanting to commit to full-time design work on these impact initiatives, or similarly ambitious initiatives not yet on our radar, grants are available from [Spiral](https://spiral.xyz/)—a division of Block Inc. that promotes and funds open-source bitcoin development and adoption (and helped convene the Bitcoin Design Community 5+ years ago).*

{% capture community_body %}
<p>Tools and initiatives created by the community to improve Bitcoin experiences.</p>
{% endcapture %}

{% include split-section.html
   class="split-section--reversed"
   graphic_color="#1134F5"
   graphic_bg_image="/assets/images/projects/section--community-project.svg"
   graphic_image="/assets/images/projects/supergraphic--community-projects-grid.png"
   content_color="#000032"
   label="Community Projects"
   headline="Built by the Community, for Bitcoin"
   body=community_body
   cta_text="View Community Projects"
   cta_url="/community/"
%}

{% capture collabs_body %}
<p>Design collaborations with teams and projects building real-world Bitcoin products.</p>
{% endcapture %}

{% include split-section.html
   class="split-section--reversed split-section--light"
   graphic_color="#9EE6FF"
   graphic_bg_image="/assets/images/projects/section--collaborations.svg"
   content_color="#ffffff"
   label="Collaborations"
   headline="Partnering to Shape Better Bitcoin"
   body=collabs_body
   cta_text="See Collaborations"
   cta_url="/collabs/"
   cta_class="-purple"
%}

<section class="ordered-cards-section">
  <div class="ordered-cards-container">
    <div class="ordered-card">
      <div class="ordered-card__square" style="background-color: #81be8c;">
        <img src="/assets/images/projects/ordered-cards/icon--ownership.svg" alt="">
      </div>
      <div class="ordered-card__text">
        <span class="ordered-card__number">01</span>
        <p class="ordered-card__description">Designing how ownership is experienced, not just explained</p>
      </div>
    </div>
    <div class="ordered-card">
      <div class="ordered-card__square" style="background-color: #ffc220;">
        <img src="/assets/images/projects/ordered-cards/icon--designing.svg" alt="">
      </div>
      <div class="ordered-card__text">
        <span class="ordered-card__number">02</span>
        <p class="ordered-card__description">Creating symbols, tools, and standards that travel across the ecosystem</p>
      </div>
    </div>
    <div class="ordered-card">
      <div class="ordered-card__square" style="background-color: #ae66d6;">
        <img src="/assets/images/projects/ordered-cards/icon--high-bar.svg" alt="">
      </div>
      <div class="ordered-card__text">
        <span class="ordered-card__number">03</span>
        <p class="ordered-card__description">Setting a higher bar for clarity, usability, and cultural coherence</p>
      </div>
    </div>
    <div class="ordered-card">
      <div class="ordered-card__square" style="background-color: #015efe;">
        <img src="/assets/images/projects/ordered-cards/icon--resources.svg" alt="">
      </div>
      <div class="ordered-card__text">
        <span class="ordered-card__number">04</span>
        <p class="ordered-card__description">Building shared references others can build on — not one-off artifacts</p>
      </div>
    </div>
  </div>
</section>

---

For more details, see our [Collaboration](https://github.com/BitcoinDesign/Meta/blob/master/Collaboration.md) and [Project](https://github.com/BitcoinDesign/Meta/blob/master/Projects.md) documents. If you are interested in getting involved, reach out in our [Discord]({{ site.discord_invite_url }}).
