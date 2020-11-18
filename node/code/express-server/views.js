// Here we are defining a string that happens to consist of HTML (and HTML is a string that the browser knows how to parse)
const dogRoute = `
    <h1> dawg route </h1>
    <h2> Some other stuff about dogs </h2>
`
// Same again..
const catRoute = `
    <h1> CAT route </h1>
    <h2> crazy cat route </h2>
`

const form = `
<form action="/my-handling-form-page" method="post">
    <ul>
        <li>
            <label for="name">Name:</label>
            <input type="text" id="name" name="userName" value="by default this element is filled with this text">
        </li>
        <li>
            <label for="mail">E-mail:</label>
            <input type="email" id="mail" name="userEmail">
        </li>
        <li>
            <label for="msg">Message:</label>
            <textarea id="msg" name="userMessage"></textarea>
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
`
// Here we are loading all the eports in one go. We see a different way to do this in our data file.
// We are essentially making an object ready for export, and setting two attributes (keys) on that object, and giving them the values of the constants above.
module.exports = {
    cat: catRoute,
    dog: dogRoute,
    form: form
}