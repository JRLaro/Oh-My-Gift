$(document).ready(function () {
  console.log('login.js loaded');
  let anyBtn = $(".btn-primary");

  anyBtn.on("click", function (e) {
    e.preventDefault();
    console.log("Clickeed");
    var fired_button = this.id;
    // var fired_button = $(this).text()

    console.log(fired_button);
    localStorage.setItem('Login', fired_button);
    queryTest(fired_button);
  });

  let clearLocalStorage= $(".clear"); 
  clearLocalStorage.on("click", function () {
    window.localStorage.clear();
  })

  //need to fix this
  function queryTest(category) {
    $.get("/api/omgTest", {
      Category: category

    }).then(function (data) {
      console.log(data, "Query test");

    })
  }
}); 