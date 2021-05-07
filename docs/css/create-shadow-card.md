---
title: create-shadow-card
date: 2021-05-01 10:19:14
permalink: /pages/8752b1/
categories:
  - css
tags:
  - 
---
# Create Shadow Card

**HTML**:

```html
<main>
  <div id="all-card">
    <div class="card">
      <div class="card-header">I'm a card.</div>
    </div>
  </div>
</main>
```

**CSS**:

```css
html body {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
main {
  margin: 1rem;
  display: flex;
  justify-content: space-around;
}
div#all-card {
  display: flex;
  margin: 1rem;
}

.card {
  max-width: 25rem;
  min-width: 20rem;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  background: #ffffff;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5);
}

.card .card-header {
  position: relative;
  overflow: hidden;
  margin-bottom: -0.5rem;
  z-index: 1;
  padding: 1.5rem;
  border-radius: 0.25rem 0.25rem 0 0;
  color: #ce239a;
  text-align: center;
}
```

Here is [Demo](https://rbew.github.io/create-shadow-card/)
