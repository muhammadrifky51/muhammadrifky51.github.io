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

const code = params.get("code");
if ((code) && !(sessionStorage.getItem('accessToken'))) {
    const clientId = '425332619627-mmdod0nr7ggqnodk02f18c2jhjgeansf.apps.googleusercontent.com';
    const clientSecret = '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';
    const redirectUri = 'https://muhammadrifky51.github.io/Wedding-Invitation/Undangan.html?S='+S;
    const grantType = 'authorization_code';
  
    const url = 'https://oauth2.googleapis.com/token';
  
    const data = {
      code: code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: grantType,
    };
  
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const accessToken = data.access_token;
        const expiresIn = data.expires_in;
        const refreshToken = data.refresh_token;
        sessionStorage.setItem("accessToken", accessToken);
        sessionStorage.setItem("expiresIn", expiresIn);
        sessionStorage.setItem("refreshToken", refreshToken);
  
        console.log(accessToken)
        console.log(expiresIn)
        console.log(refreshToken)

        getuser();

        window.location = redirectUri

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  } else {
    if (sessionStorage.getItem('accessToken')){
        const accessToken=sessionStorage.getItem('accessToken');
        const expiresIn=sessionStorage.getItem('expiresIn');
        const refreshToken=sessionStorage.getItem('refreshToken');

        console.log(accessToken)
        console.log(expiresIn)
        console.log(refreshToken)

        const formcuapcuap=document.getElementById("formcuapcuap")
        const brkln=document.createElement("p")
        brkln.innerHTML="<br>"

        const labelnama=document.createElement("label")
        labelnama.htmlFor="nama"
        labelnama.className="ucapan_label"
        labelnama.innerHTML="Nama:"
        formcuapcuap.appendChild(labelnama)

        const textsignoutnya=document.createElement("span")
        textsignoutnya.innerText="Ganti akun?"
        textsignoutnya.style="color: #00146b;cursor: pointer;font-size:smaller;"
        textsignoutnya.setAttribute("onclick","unauthorized()")

        formcuapcuap.appendChild(textsignoutnya)
        formcuapcuap.appendChild(brkln)

        const inputnama=document.createElement("input")
        inputnama.type="text"
        inputnama.name="nama"
        inputnama.id="nama"
        inputnama.rows="1"
        inputnama.placeholder="Namamu disini"
        inputnama.readOnly=true
        formcuapcuap.appendChild(inputnama)
        formcuapcuap.appendChild(brkln)

        const pilihankehadiran=document.createElement("ul")
        pilihankehadiran.className="ucapan_kehadiran row align-item-start"
        
        const pilihanijo=document.createElement("li")
        pilihanijo.className="ijo"

        const inputijo=document.createElement("input")
        inputijo.type="radio"
        inputijo.name="kehadiran"
        inputijo.id="Hadir"
        inputijo.value="1"
        inputijo.required=true
        pilihanijo.appendChild(inputijo)

        const labelijo=document.createElement("label")
        labelijo.htmlFor="Hadir"
        labelijo.innerText="Hadir"
        pilihanijo.appendChild(labelijo)

        const pilihanmerah=document.createElement("li")
        pilihanmerah.className="merah"

        const inputmerah=document.createElement("input")
        inputmerah.type="radio"
        inputmerah.name="kehadiran"
        inputmerah.id="TakHadir"
        inputmerah.value="2"
        inputmerah.required=true
        pilihanmerah.appendChild(inputmerah)

        const labelmerah=document.createElement("label")
        labelmerah.htmlFor="TakHadir"
        labelmerah.innerText="Tidak Hadir"
        pilihanmerah.appendChild(labelmerah)

        const pilihankuning=document.createElement("li")
        pilihankuning.className="kuning"

        const inputkuning=document.createElement("input")
        inputkuning.type="radio"
        inputkuning.name="kehadiran"
        inputkuning.id="Tentative"
        inputkuning.value="3"
        inputkuning.required=true
        pilihankuning.appendChild(inputkuning)

        const labelkuning=document.createElement("label")
        labelkuning.htmlFor="Tentative"
        labelkuning.innerText="Belum Tahu"
        pilihankuning.appendChild(labelkuning)

        pilihankehadiran.appendChild(pilihanijo)
        pilihankehadiran.appendChild(pilihankuning)
        pilihankehadiran.appendChild(pilihanmerah)

        formcuapcuap.appendChild(pilihankehadiran)
        formcuapcuap.appendChild(brkln)

        const labelucapan=document.createElement("label")
        const bintangnyaucapan=document.createElement("span")
        labelucapan.htmlFor="ucapan"
        labelucapan.innerText="Ucapan:"
        bintangnyaucapan.style="color: red;"
        bintangnyaucapan.innerText="*"
        labelucapan.appendChild(bintangnyaucapan)
        formcuapcuap.appendChild(labelucapan)
        formcuapcuap.appendChild(brkln)

        const textucapan=document.createElement("textarea")
        textucapan.type="text"
        textucapan.id="ucapan"
        textucapan.name="ucapan"
        textucapan.rows="5"
        textucapan.required=true
        formcuapcuap.appendChild(textucapan)
        formcuapcuap.appendChild(brkln)
        formcuapcuap.appendChild(brkln)

        const submitbutton=document.createElement("input")
        submitbutton.type="submit"
        submitbutton.value="Kirim"
        formcuapcuap.appendChild(submitbutton)

        //const textsignoutnya=document.getElementById("textsignout")
        //textsignoutnya.innerText="Ganti akun?"
        //textsignoutnya.style="color: #00146b;cursor: pointer;font-size:smaller;"
        //textsignoutnya.setAttribute("onclick","unauthorized()")
    } else {
        const tempatnya=document.getElementById("LoginGoogle")
        const tombolnya=document.createElement("button")
        const textnya=document.createElement("p")

        textnya.innerText= "Signin with google for leaving the messages"
        
        tombolnya.setAttribute("onclick","authorize()")
        tombolnya.innerHTML="<img src=\"assets/images/Glogo.png\" style=\"width:1em;height:1em\"> Signin with Google"
        tombolnya.className="loginwithgoogle"
        
        tempatnya.appendChild(textnya)
        tempatnya.appendChild(tombolnya)

        //const textsignoutnya=document.getElementById("textsignout")
        //textsignoutnya.innerText="*"
        //textsignoutnya.style="color: red;"
    }
  }