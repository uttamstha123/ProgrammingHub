// * fetch data form my local json file
const jsonData = fetch("./programminglanguage.json");
jsonData
  .then(function (result) {
    return result.json();
  })
  .then(function (data) {
    data.forEach((element) => {
      renderCards(element);
    });
  });

function renderCards(data) {
      
}
