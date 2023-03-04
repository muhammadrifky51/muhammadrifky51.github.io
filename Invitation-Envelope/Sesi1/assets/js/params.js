const params = new URLSearchParams(document.location.search);
const To = params.get("To");
document.getElementById("to").innerHTML=To