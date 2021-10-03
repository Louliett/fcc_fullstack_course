**Add Images to Your Website**

You can add images to your website by using the `img` element, 
and point to a specific image's URL using the `src` attribute.

An example of this would be:

    <img src="https://www.freecatphotoapp.com/your-image.jpg">

Note that `img` elements are self-closing.

All `img` elements **must** have an `alt` attribute.
The text inside an `alt` attribute is used for screen readers 
to improve accessibility and is displayed if the image fails to load.

**Note**: If the image is purely decorative, using an empty alt attribute is a best practice.

Ideally the `alt` attribute should not contain special characters unless needed.

Let's add an `alt` attribute to our `img` example above:

    <img src="https://www.freecatphotoapp.com/your-image.jpg" alt="A business cat wearing a necktie.">

<hr>

Let's try to add an image to our website:

Within the existing `main` element, insert an `img` element before the existing `p` elements.

Now set the `src` attribute so that it points to the url 
`https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`

Finally, don't forget to give your `img` element an `alt` attribute with applicable text.
