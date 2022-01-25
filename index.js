const fetchData = fetch("./programminglanguage.json");
fetchData
  .then((result) => {
    let data = result.json();
    return data;
  })
  .then((results) => {
    results.forEach((result) => {
      // renderCard so only name is required
      renderResult(result);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Handling onclick event on card [flex-items]

const cardItems = document.querySelector(".flex-container");
cardItems.addEventListener("click", (e) => {
  let item = e.target;
  if (item.classList.value === "flex-item") {
    console.log(item);
    // item.setAttribute('href','./pages/language.html');
    // renderPage();
  }
});

const container = document.querySelector(".flex-container");
function renderResult(data) {
  // Flex-item
  const card = document.createElement("a");
  card.classList.add("flex-item");
  // card.setAttribute("target", "_blank");
  card.setAttribute("href", "#");

  // Child node of flex-item
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo");

  const logo = document.createElement("img");
  logo.setAttribute("src", `./images/icons/${data.iconUrl}`);
  console.log(data.iconUrl);

  logoContainer.appendChild(logo);
  const name = document.createElement("h1");
  name.classList.add("name");
  name.innerText = data.name;

  card.appendChild(logoContainer);
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
      item.setAttribute("id", "filter");
    }
  });
}
