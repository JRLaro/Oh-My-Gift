$(document).ready(function () {
  console.log('category.js loaded');
  let anyBtnDanger = $(".cat");
  var fired_button;
  var price1;
  var price2;

  anyBtnDanger.on("click", function (e) {
    e.preventDefault();
    console.log("Clickeed");
    fired_button = this.id;
    localStorage.setItem('Category', fired_button);
    console.log(fired_button);
  });

  let anyBtnSuccess = $(".price");

  anyBtnSuccess.on("click", function (e) {
    e.preventDefault();
    console.log("Clickeed");
    //js to splice id from seleced btn
    string = this.id;
    price1 = string.split("-")[0];
    price2 = string.split("-")[1];
    fired_button = localStorage.getItem('Category');
    console.log(fired_button);
    queryTest(fired_button, price1, price2);
  });

  let clearLocalStorage = $(".clear");
  clearLocalStorage.on("click", function () {
    window.localStorage.clear();
  })

  //add on click for login.handlebars

  function queryTest(category, price1, price2) {
    console.log(category);
    $.get("/api/omgTest/" + category + "/" + price1 + "/" + price2, {}).then(function (data) {
      console.log(data, "Query test");

    })
  }
}); 