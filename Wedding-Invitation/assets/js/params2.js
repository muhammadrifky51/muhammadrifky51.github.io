const params = new URLSearchParams(document.location.search);
const S = params.get("S");
if (S=="1"){
    document.getElementById("sesi").innerHTML='<b>Sesi I</b>: Pukul 10:00-11:00 WIB'
}
else if(S=="2"){
    document.getElementById("sesi").innerHTML='<b>Sesi II</b>: Pukul 11:00-12:00 WIB'
}
else{
    document.getElementById("sesi").innerHTML='<b>Masih Rahasia ya Muehehehe</b>'
}
