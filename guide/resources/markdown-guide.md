---
layout: guide
title: Markdown guide
parent: Drop-in Resources
nav_order: 3
---

# Markdown guide

---

## Headers sizes 1 to 6

# 1. The quick brown fox jumps over the lazy dog

## 2. The quick brown fox jumps over the lazy dog

### 3. The quick brown fox jumps over the lazy dog

#### 4. The quick brown fox jumps over the lazy dog

##### 5. The quick brown fox jumps over the lazy dog

###### 6. The quick brown fox jumps over the lazy dog

---

## Body text

Successful key management is critical to the security of a cryptosystem. It is the more challenging side of cryptography in a sense that it involves aspects of social engineering such as system policy, user training, organizational and departmental interactions, and coordination between all of these elements, in contrast to pure mathematical practices that can be automated.

---

## Images

{% include image.html
   image = "/assets/images/placeholder/full-width.png"
   alt-text = "Alternative text"
   caption = "A caption with a <a href='https://bitcoin.org' target='_blank'>link</a>"
   layout = "full-width"
   width = 1280
   height = 514
%}

<div class="center">

{% include image.html
   image = "/assets/images/placeholder/small-square.png"
   alt-text = "Alternative text"
   caption = "A caption with a <a href='https://bitcoin.org' target='_blank'>link</a>"
   layout = "float-left"
   width = 200
   height = 200
%}

Successful key management is critical to the security of a cryptosystem. It is the more challenging side of cryptography in a sense that it involves aspects of social engineering such as system policy, user training, organizational and departmental interactions, and coordination between all of these elements, in contrast to pure mathematical practices that can be automated.

</div>

{% include image.html
   image = "/assets/images/placeholder/normal-width.png"
   alt-text = "Alternative text"
   caption = "A caption with a <a href='https://bitcoin.org' target='_blank'>link</a>"
   width = 800
   height = 400
%}

{% include image.html
   image = "/assets/images/placeholder/app-screens@2x.png"
   alt-text = "Alternative text"
   caption = "A caption with a <a href='https://bitcoin.org' target='_blank'>link</a>"
   layout = "full-width"
   width = 2560
   height = 901
%}

---

## Blockquote

> Cryptographic protocol design, key servers, user procedures, and other relevant protocols.
>
> -- <cite>Samantha</cite>

---

## Lists

* One
* Two
* Three

- One
- Two
- Three

---

## Code

`This is code`


