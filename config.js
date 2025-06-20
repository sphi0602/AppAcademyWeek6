let rootpath = "file:///C:/Users/nhlan/Documents/websites/sphindile%20web/pine-city-zoo/avengers";
let apiKey = checkApiKey();

function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}