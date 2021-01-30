# Create a Set of Checkboxes

```html
<form action="https://freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor">Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor">Outdoor</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
    <br>
    <label for="loving"><input id="loving" type="checkbox" name="personality">Loving</label>
    <br>
    <label for="loving"><input id="loving" type="checkbox" name="personality">Loving</label>
    <br>
    <label for="loving"><input id="loving" type="checkbox" name="personality">Loving</label>
</form>
```

Each of your checkboxes can be nested within its own `label` element. By wrapping an `input` element inside of a `label` element it will automatically associate the checkbox input with the label element surrounding it.

All related checkbox inputs should have the same `name` attribute.

[source](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-set-of-checkboxes)
