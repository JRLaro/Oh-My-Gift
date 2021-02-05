$(document).ready(function () {
    console.log('apiTest loaded');

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://target1.p.rapidapi.com/auto-complete?q=macbook%20air",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "060fa7bd32mshd4d14b256c582fbp173924jsn92ccfae51f8e",
            "x-rapidapi-host": "target1.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });

});
