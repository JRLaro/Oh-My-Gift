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

    console.log('price.js loaded');
    let anyBtnSuccess = $(".price");
  
    anyBtnSuccess.on("click", function (e) {
      e.preventDefault();
      console.log("Clickeed");
      price1 = 20;
      price2 = 200;
      fired_button = localStorage.getItem('Category');
      console.log(fired_button);
      queryTest(fired_button, price1, price2);
    });
  

  
    function queryTest(category, price1, price2) {
      console.log(category);
      $.get("/api/omgTest/"+category+"/"+price1+"/"+price2, {}).then(function (data) {
        console.log(data, "Query test");
  
      })
    }
  }); 