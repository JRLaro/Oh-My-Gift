
$(document).ready(function () {
    console.log('category.js loaded');
    let healthBtn = $(".health");
  
    healthBtn.on("click", function (e) {
      e.preventDefault();
      console.log("Clickeed");
      let category = "Health";
      queryTest(category);
    });
  
    function queryTest(category) {
      $.get("/api/omgTest", {
        Category: category
  
      }).then(function (data) {
        console.log(data, "Query test");
  
      })
    }
  });