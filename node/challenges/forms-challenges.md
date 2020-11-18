## Form Challenge
Please add this form to your views file (#teacher-resources). And serve the form from a route.
If you finish that, have a look at the form and see if you can start to work out a way to receive the form data in your API.
```html
<form action="/my-handling-form-page" method="post">
    <ul>
        <li>
            <label for="name">Name:</label>
            <input type="text" id="name" name="user_name" value="by default this element is filled with this text">
        </li>
        <li>
            <label for="mail">E-mail:</label>
            <input type="email" id="mail" name="user_email">
        </li>
        <li>
            <label for="msg">Message:</label>
            <textarea id="msg" name="user_message"></textarea>
        </li>
    </ul>
    <div class="preference">
        <label for="cheese">Do you like cheese?</label>
        <input type="checkbox" name="cheese" id="cheese">
    </div>
    <div class="button">
        <button type="submit">Send your message</button>
    </div>
</form>
```

### Forms Challenge Extended
Make three routes to serve three forms. Keep the forms simple, but look to use a few different types of input so that you can play around with the different elements of forms.
Have those forms hit three different routes when they are submitted, and in those routes send back a piece (at least one) of the data sent via the form.
