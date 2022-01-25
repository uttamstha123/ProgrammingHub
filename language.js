window.addEventListener("load", () => {
  const name = document.querySelector(".main-info .title"),
    developer = document.querySelector(".main-info .developer"),
    date = document.querySelector(".main-info .date"),
    description = document.querySelector(".info-container .description"),
    documentation = document.querySelector(".info-container #doc-url");

  name.innerText = localStorage.getItem("NAME");
  developer.innerText = localStorage.getItem("DEVELOPER");
  date.innerText = localStorage.getItem("FIRSTRELEASE");
  description.innerText = localStorage.getItem("DESCRIPTION");
  documentation.setAttribute("href", localStorage.getItem("DOCUMENTATION"));
});
