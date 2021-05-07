# Create A Set Of Radio Buttons

```html
<form action="https://freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"> 
        <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
    </label>
    <label for="outdoor"> 
        <input id="outdoor" type="radio" name="indoor-outdoor">Outdoor 
    </label>
</form>
```

It is considered best practice to set a `for` attribute on the `label` element, with a value that matches the value of the `id` attribute of the `input` element. This allows assistive technologies to create a linked relationship between the label and the child `input` element.

[source](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-set-of-radio-buttons)
