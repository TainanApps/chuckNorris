# Chuck Norris Joke API exercise

![chuck norris cool pic](https://images02.military.com/sites/default/files/2021-04/chucknorris.jpeg)

Create a website that reads the Chuck Norris API and displays the jokes to the screen.

After completing this exercise you will know how to:

- Work with `json` data
- Call an external website endpoint to read their json data
- Understand how to use the async `fetch ` function
- Use dropdowns and read their values
- Automatically fill dropdown lists

---

## Steps

1. What is JSON data?

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

   - Read JSON data from the chuck norris api web site

   ```javascript
   const getJson = async (url) => {
     const resp = await fetch(url);
     const respJson = await resp.json();
     return respJson;
   };
   ```

> This block quote is here for your information.

- [hudektech](https://hudektech.com)
- nested item one
- nested item two

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
| --------------- | --------------------- | ---------- |
| John Doe        | john@email.com        | Taipei, TW |
| me              | me@gmail.com          | Austin, Tx |
| Mark Rutherford | mrutherford@gmail.com | Austin, Tx |
