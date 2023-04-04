fetch('https://sheets.googleapis.com/v4/spreadsheets/1U_apKzNzsmmV_3DvFxjnI8t7G67ELZisDm5pOIxiLpk/values/Tablenya?key=AIzaSyBWLiCwazxX-joobuNWWeJ_0_CKCGT77rk')
  .then(response => response.json())
  .then(data => {
    console.log(data.values)
    kotaknya = document.getElementById("kotak_ucapan")
    for (let i = 1; i<data.values.length; i++){
      const namanya=document.createElement("p")
      const delnum=0.5+(0.2*(i-1))
      namanya.setAttribute("class","nama_dan_kehadiran wow fadeInDown")
      namanya.setAttribute("data-wow-duration","0.5s")
      namanya.setAttribute("data-wow-delay",delnum.toString()+"s")
      namanya.innerText=data.values[i][0]+" "

      const statusnya=document.createElement("a")
      statusnya.innerText="a"
      if (data.values[i][1]="1"){
        statusnya.setAttribute("class","kehadiran1")
      }
      else if(data.values[i][1]="2"){
        statusnya.setAttribute("class","kehadiran2")
      }
      else{
        statusnya.setAttribute("class","kehadiran3")
      }
      namanya.appendChild(statusnya)
      kotaknya.appendChild(namanya)
    }
  })