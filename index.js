const fetchData = fetch("../programminglanguage.json");
let data = [];
fetchData
  .then((result) => {
    let data = result.json();
    return data;
  })
  .then((results) => {
    results.forEach((result) => {
      // renderCard so only name is required
      renderResult(result.name);
    });
  })
  .catch((err) => {
    console.log(err);
  });

const container = document.querySelector(".flex-container");
function renderResult(data) {
  // Flex-item
  const card = document.createElement("a");
  card.classList.add("flex-item");
  // card.setAttribute("target", "_blank");
  card.setAttribute("href", "#");

  // Child node of flex-item
  const logo = document.createElement("div");
  logo.classList.add("logo");

  const name = document.createElement("h1");
  name.classList.add("name");
  name.innerText = data;

  card.appendChild(logo);
  card.appendChild(name);

  container.appendChild(card);
}

// filter search

const items = document.getElementsByClassName("flex-item");
// console.log('items', items);
const searchBox = document.querySelector("#search");
function searchValue(value) {
  filterSearch(value);
}

function filterSearch(result) {
  Array.from(items).forEach((item) => {
    let itemString = item.innerText;
    result = String(result).toUpperCase();
    let logic = itemString.toUpperCase().includes(result);
    if (logic) {
      item.removeAttribute("id");
    } else {
      item.setAttribute('id','filter')
    }
  });
}
