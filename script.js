const jokeCategory = document.querySelector("#joke-category");
const jokeText = document.querySelector("#joke-text");
const btnGetJoke = document.querySelector("#joke-get");
const chuckCategories = "https://api.chucknorris.io/jokes/categories";
const chuckJokes = "https://api.chucknorris.io/jokes/random?category=";

// const chuckJokes = 'https://api.chucknorris.io/jokes/random?category={category}'

// Generic fetch routine
const getJson = async (url) => {
  const resp = await fetch(url);
  const respJson = await resp.json();
  return respJson;
};

// Get categories
const loadCategories = async () => {
  respJson = await getJson(chuckCategories);
  console.log(respJson);

  let dropDown = document.querySelector("#joke-category");
  dropDown.options.innerHTML = "";

  [...dropDown.options].map((e) => e.remove());

  for (let i = 0; i < respJson.length; i++) {
    let item = document.createElement("option");
    item.innerHTML = `<option class='items' value="${respJson[i]}">${respJson[i]}</option>`;
    dropDown.options.add(item);
  }

  dropDown.selectedIndex = 8;

  // call up the first joke
  getNextJoke("dummy");
};

loadCategories();

const getNextJoke = async (e) => {
  // get the category
  let dropDown = document.querySelector("#joke-category");
  let num = dropDown.selectedIndex;
  let value = [...dropDown.options][num].value;

  respJson = await getJson(`${chuckJokes}${value}`);
  jokeText.innerText = respJson.value;
};

btnGetJoke.addEventListener("click", getNextJoke);
jokeCategory.addEventListener("change", getNextJoke);

// console.log(jokeText.innerText);
// console.log(jokeCategory.value);
