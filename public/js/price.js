$(document).ready(function () {
  console.log('price.js loaded');
  let anyBtnSuccess = $(".price");
  var fired_button;
  var price1;
  var price2;

  anyBtnSuccess.on("click", function (e) {
    e.preventDefault();
    console.log("Clickeed");
    price1 = 20;
    price2 = 200;
    fired_button = this.id;
    localStorage.setItem('Price', fired_button);
    console.log(fired_button);
    queryTest(fired_button, price1, price2);
  });

 let clearLocalStorage= $(".clear"); 
 clearLocalStorage.on("click", function () {
   window.localStorage.clear();
 })

  function queryTest(category, price1, price2) {
    console.log(category);
    $.get("/api/omgTest/"+category+"/"+price1+"/"+price2, {}).then(function (data) {
      console.log(data, "Query test");

    })
  }
}); 