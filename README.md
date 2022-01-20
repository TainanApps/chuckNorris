# Chuck Norris Joke API 

![chuck norris cool pic](https://images02.military.com/sites/default/files/2021-04/chucknorris.jpeg)

## Objectives

Create a website that reads the Chuck Norris API and displays the jokes to the screen.

After completing this exercise you will know how to:

### Javascript
- Work with `json` data 
- Call an API (application program interface) and read it's data
- Understand how to interact with web sites asynchronously using async `fetch ` function
- Read dropdown selections and their values
- Automatically fill dropdown lists in HTML using Javascript

### HTML
- Create dropdown lists
- Add images

### CSS
- Use Flexbox styling to format elements
- Style buttons
### Integration 
- Understand relationship between Javascript (JS), HTML, and CSS
- Explain this relationship
  - JS-> HTML <-CSS

---

## Concepts

### User Snippets

```javascript
  "function1": {
    "prefix": "fn1",
    "body": ["const $1 = ($2) => { $3 }"],
    "description": "arrow function statement"
  },
  "function2": {
    "prefix": "fn2",
    "body": ["($1) => { $2 }"],
    "description": "arrow function"
  },
    "querySel1": {
    "prefix": "q1",
    "body": ["document.querySelector($1)"],
    "description": "arrow function statement"
  },
  "querySel2": {
    "prefix": "q2",
    "body": ["document.querySelectorAll($1)"],
    "description": "arrow function statement"
  },
```

### CSS

- Reference class by .
- Reference id by #
- Reference element by element name

```css
.btn-get {
  background: navy;
  color: white;
}

#my-id {
  color: green;
}

h1 {
  text-shadow: 1px 1px 2px grey;
}
```

### JSON data and reading it using Javascript

> JSON data is similar to objects with a key in quotes and the value after the colon

- Example JSON data

```json
{
  "categories": [],
  "created_at": "2020-01-05 13:42:23.240175",
  "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  "id": "OlsdMIudTsOfAaii3NcXvQ",
  "updated_at": "2020-01-05 13:42:23.240175",
  "url": "https://api.chucknorris.io/jokes/OlsdMIudTsOfAaii3NcXvQ",
  "value": "Chuck Norris skipped recess in school, becuse he don't play"
}
```

- Read JSON data from the API

  [https://api.chucknorris.io/jokes/random](https://api.chucknorris.io/jokes/random)

- Read JSON data from the chuck norris api web site using javascript

```javascript
const getJson = async (url) => {
  const resp = await fetch(url);
  const respJson = await resp.json();
  return respJson;
};

url = "https://api.chucknorris.io/jokes/random";

console.log(getJson(url));
```

#### Javascript

- Event listeners, reference HTML element by id using #, class using ., and element using it's name
- Event listener references a function which is called when the event is triggered ('click')

```javascript
const btnGetJoke = document.querySelector("#joke-get");

btnGetJoke.addEventListener("click", getNextJoke);
```

  <!-- > This block quote is here for your information.

* [hudektech](https://hudektech.com)
* nested item one
* nested item two

1. item one
2. item two

```bash
npm install

```

```javascript
function add(num1, num2) {
  return num1 + num2;
}
const x = a + b;
```

```python
def add(num1, num2):
  return num1 + num2;
```

| Name            | Email                 | City       |
| --------------- | --------------------- | ---------- | --- |
| John Doe        | john@email.com        | Taipei, TW |
| me              | me@gmail.com          | Austin, Tx |
| Mark Rutherford | mrutherford@gmail.com | Austin, Tx | -->
