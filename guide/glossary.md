---
layout: guide
title: Glossary
permalink: /guide/glossary/
nav_order: 8
main_classes: -no-top-padding
image: https://bitcoin.design/assets/images/guide/glossary/glossary-preview.jpg
---

<!--

Editor's notes

Header illustration source:
https://www.figma.com/file/qzvCvqhSRx3Jq8aywaSjlr/Bitcoin-Design-Guide-Illustrations-CO?node-id=1155%3A7726

-->

{% include picture.html
   image = "/assets/images/guide/glossary/glossary.png"
   retina = "/assets/images/guide/glossary/glossary@2x.png"
   mobile = "/assets/images/guide/glossary/glossary-mobile.png"
   mobileRetina = "/assets/images/guide/glossary/glossary-mobile@2x.png"
   alt-text = "Notebook with handwritten user actions"
   width = 1600
   height = 550
   layout = "full-width"
%}

# Glossary

---

<div class="glossary-toc" markdown="1">
   <ul id="markdown-toc">
{% for term in site.glossary %}
     <li><a href="#{{term.path | replace: '.md', '' | replace: '_glossary/', ''}}" id="markdown-toc-{{term.path | replace: '.md', '' | replace: '_glossary/', ''}}">{{term.title}}</a></li>
{% endfor %}
   </ul>
</div>

---

{% for term in site.glossary %}
{% if term.summary %}
<h3 id="{{term.path | replace: '.md', '' | replace: '_glossary/', ''}}"><a href="{{ term.permalink }}">{{ term.title }}</a></h3>
{{ term.summary | markdownify }}
{% else %}
<h3 id="{{term.path | replace: '.md', '' | replace: '_glossary/', ''}}">{{ term.title }}</h3>
{{ term.content | markdownify }}
{% endif %}
{% endfor %}

### Additional resources

- [Bitcoin.org](https://bitcoin.org/en/vocabulary)
- [Bitcoin Q + A glossary](https://www.bitcoinqna.com/glossary)
- [Bitcoin Wiki](https://en.bitcoin.it/wiki/Main_Page)
- [Bitcoin Optech style guide](https://github.com/bitcoinops/bitcoinops.github.io/blob/master/STYLE.md)
- [Bitcoin Optech topics](https://bitcoinops.org/en/topics/)