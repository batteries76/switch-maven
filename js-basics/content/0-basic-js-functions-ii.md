```
introduce the <input> element
input.value vs element.innerText
write functions to encapsulate the code for adding, subtracting, multiplying, dividing
attach them to the onclick handlers
```

- Functions and the DOM
- Events (onclick)
- `<input>` tag (HTML)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive</title>
</head>
<body>
    <div id="myname">
        <h1>test to be repalced by my name</h1>
    </div>
    <script>
        let myname = document.querySelector('#myname')
        let myName = prompt('Eneter your name', '')
        myname.innerText = myName;
    </script>
</body>
</html>
```

```html
<h1 id="firstNum">0</h1>
<h1 id="secondNum">0</h1>
<h2 id="result">temp</h2>
<button id="add"> Add </button>
```

