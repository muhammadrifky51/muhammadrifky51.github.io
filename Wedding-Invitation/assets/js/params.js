const params = new URLSearchParams(document.location.search);
const To = params.get("To");
const S = params.get("S");
document.getElementById("to").innerHTML=To.replace(/\+/g, " ")
var button = document.getElementById("btn-undangan");
button.addEventListener("click", function() {
    var hrefValue = "Undangan.html?S=" + S;
    window.location.href = hrefValue;
});