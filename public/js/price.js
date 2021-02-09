$(document).ready(function () {
    console.log('price.js loaded');
    let anyBtn = $(".btn-block");
  
    anyBtn.on("click", function (e) {
      e.preventDefault();
      console.log("Clickeed");
      var fired_button = this.id;
      console.log(fired_button);
      queryTest(fired_button);
    });
  
    function queryTest(price){
      
    }
  });
  