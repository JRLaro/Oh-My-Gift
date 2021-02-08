
$(document).ready(function() {
    console.log('omg.js loaded');

    $.get("/api/omgTest").then(function(data) {
        console.log(data);
        //$(".product-name").text(data);
      });
 });