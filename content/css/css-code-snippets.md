# CSS Code Snippets

## Keep footer at the Bottom

## Create A Media Query

```css
@media (max-width: 100px) { /* CSS Rules */ }
@media (min-height: 350px) { /* CSS Rules */ }
```

```css
p {
    font-size: 20px;
}

@media (max-height: 800px) {
    p {
    font-size: 10px;
    }
}
```

## Make Typography Responsive

The four different viewport units are:

- `vw` (viewport width): `10vw` would be 10% of the viewport's width.
- `vh` (viewport height): `3vh` would be 3% of the viewport's height.
- `vmin` (viewport minimum): `70vmin` would be 70% of the viewport's smaller dimension (height or width).
- `vmax` (viewport maximum): `100vmax` would be 100% of the viewport's bigger dimension (height or width).

Here is an example that sets a `body` tag to 30% of the viewport's width.

```css
body { width: 30vw; }
```

## Use A Retina Image For Higher Resolution Displays

为更高的分辨率使用视网膜图像

The simplest way to make your images properly appear on High\-Resolution Displays, such as the MacBook Pros "retina display" is to define their `width` and `height` values as only half of what the original file is. Here is an example of an image that is only using half of the original height and width:

```html
<style> img { height: 250px; width: 250px; } </style> <img src="coolPic500x500" alt="A most excellent picture">
```
