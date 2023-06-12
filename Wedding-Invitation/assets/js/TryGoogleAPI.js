/* Original (Available Column: Nama, Kehadiran, Pesan)
fetch('https://sheets.googleapis.com/v4/spreadsheets/1U_apKzNzsmmV_3DvFxjnI8t7G67ELZisDm5pOIxiLpk/values/Tablenya?key=AIzaSyBWLiCwazxX-joobuNWWeJ_0_CKCGT77rk')
  .then(response =>response.json())
  .then(data => {
    kotaknya = document.getElementById("kotak_ucapan")
    for (let i = 1; i<data.values.length; i++){
      const namanya=document.createElement("p")
      const delnum=0.5+(0.2*(i-1))
      namanya.setAttribute("class","nama_dan_kehadiran wow fadeInDown")
      namanya.setAttribute("data-wow-duration","1.2s")
      namanya.setAttribute("data-wow-delay",delnum.toString()+"s")
      namanya.innerText=data.values[i][0]

      const statusnya=document.createElement("a")
      statusnya.innerText="a"
      if (data.values[i][1]=="1"){
        statusnya.setAttribute("class","kehadiran1")
      } else if (data.values[i][1]=="2"){ 
        statusnya.setAttribute("class","kehadiran2")
      } else {
        statusnya.setAttribute("class","kehadiran3")
      }
      namanya.appendChild(statusnya)
      kotaknya.appendChild(namanya)
      
      const babelnya = document.createElement("li")
      babelnya.setAttribute("class","bubble wow fadeInDown")
      babelnya.setAttribute("data-wow-duration","1.2s")
      babelnya.setAttribute("data-wow-delay",delnum.toString()+"s")

      const pesannya=document.createElement("p")
      pesannya.innerText=data.values[i][2]
      babelnya.appendChild(pesannya)
      kotaknya.appendChild(babelnya)

    }
  })
*/

/* With Photos (Available Column: Foto, NamaAsli, NamaInput, Kehadiran, Pesan) */
fetch('https://sheets.googleapis.com/v4/spreadsheets/1V-Xhd-KtT9cPimwQyfD4jyzT6vC2MZKAlzQufCub2RE/values/Tablenya?key=AIzaSyBWLiCwazxX-joobuNWWeJ_0_CKCGT77rk')
  .then(response =>response.json())
  .then(data => {
    kotaknya = document.getElementById("kotak_ucapan")
    for (let i = 1; i<data.values.length; i++){
      const namanya=document.createElement("p")
      const delnum=0.5+(0.2*(i-1))
      namanya.setAttribute("class","nama_dan_kehadiran wow fadeInDown")
      namanya.setAttribute("data-wow-duration","1.2s")
      namanya.setAttribute("data-wow-delay",delnum.toString()+"s")
      namanya.innerText=data.values[i][2]

      const fotoprofile=document.createElement("img")
      fotoprofile.setAttribute("class","profpict wow fadeInDown")
      fotoprofile.setAttribute("data-wow-duration","1.2s")
      fotoprofile.setAttribute("data-wow-delay",delnum.toString()+"s")      
      fotoprofile.src=data.values[i][0]

      const statusnya=document.createElement("a")
      statusnya.innerText="a"
      if (data.values[i][3]=="1"){
        statusnya.setAttribute("class","kehadiran1")
      } else if (data.values[i][3]=="2"){ 
        statusnya.setAttribute("class","kehadiran2")
      } else {
        statusnya.setAttribute("class","kehadiran3")
      }
      namanya.appendChild(statusnya)
      kotaknya.appendChild(namanya)
      
      const babelnya = document.createElement("li")
      babelnya.setAttribute("class","bubble wow fadeInDown")
      babelnya.setAttribute("data-wow-duration","1.2s")
      babelnya.setAttribute("data-wow-delay",delnum.toString()+"s")

      const pesannya=document.createElement("p")
      pesannya.innerText=data.values[i][4]
      babelnya.appendChild(pesannya)
      kotaknya.appendChild(babelnya)

    }
  })
