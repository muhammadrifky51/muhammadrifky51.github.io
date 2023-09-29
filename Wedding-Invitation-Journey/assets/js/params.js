const params = new URLSearchParams(document.location.search);
const To = params.get("To");
const S = params.get("S");
document.getElementById("to").innerHTML=To.replace(/\+/g, " ").replace(/\-/g, " ")
var button = document.getElementById("btn-undangan");
button.addEventListener("click", function() {
    var hrefValue = "Undangan.html?S=" + S;
    window.location.href = hrefValue;
});
SesiText=document.getElementById("sesinya")
if (S=="1") {
    SesiText.innerHTML='Sabtu, 20 Mei 2023 <br> Pukul 10:00-11:00 WIB'
} else if (S=="2"){
    SesiText.innerHTML='Sabtu, 20 Mei 2023 <br> Pukul 11:00-12:00 WIB'
} else{
    SesiText.innerHTML='Tanggal sama Jamnya Masih Rahasia ya <br> (Gadeng tambahin Query String aja di urlnya)'
}
