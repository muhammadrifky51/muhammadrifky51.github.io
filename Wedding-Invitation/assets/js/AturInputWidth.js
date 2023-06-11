if (window.innerWidth<480){
    document.getElementById('nama').style.width="90%"
    document.getElementById('ucapan').style.width="90%"
} else {
    document.getElementById('nama').style.width="30em"
    document.getElementById('ucapan').style.width="30em"
}

document.getElementById('head_id').style.height="100vh"
document.getElementById('head_id').style.backgroundColor="#B5F2F7"

if(document.getElementById('gantinama').checked){
    inputnama.readOnly=false
} else{
    inputnama.value=sessionStorage.getItem("dt2name")        
    inputnama.readOnly=true
}