const fetchData = fetch("./programminglanguage.json");
let data;
fetchData
  .then((result) => {
    data = result.json();
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
cardItems.addEventListener("click", (event) => {
  let item = event.target;
  if (item.classList.value === "flex-item") {
    // console.log(item.innerText);
    item.setAttribute("href", "./pages/language.html");
    data
      .then((getData) => {
        return getData;
      })
      .then((myData) => {
        myData.forEach((data) => {
          if (data.name === item.innerText) {
            localStorage.clear();
            localStorage.setItem("NAME", data.name);
            localStorage.setItem("DEVELOPER", data.developedBy);
            localStorage.setItem("FIRSTRELEASE", data.firstAppeared);
            localStorage.setItem("DESCRIPTION", data.description);
            localStorage.setItem("DOCUMENTATION", data.documentation);
          }
        });
        // set properties to session storage
      });
  }
});

// rendering card

const container = document.querySelector(".flex-container");
function renderResult(data) {
  // Flex-item
  const card = document.createElement("a");
  card.classList.add("flex-item");
  card.setAttribute("target", "_blank");
  card.setAttribute("href", "#");

  // Child node of flex-item
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo");

  const logo = document.createElement("img");
  logo.setAttribute("src", `./images/icons/${data.iconUrl}`);

  const name = document.createElement("h1");
  name.classList.add("name");
  name.innerText = data.name;

  logoContainer.appendChild(logo);
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
