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
        const brkln=document.createElement("span")
        brkln.innerHTML="<br>"

        const labelnama=document.createElement("label")
        labelnama.htmlFor="nama"
        labelnama.className="ucapan_label"
        labelnama.innerHTML="Nama:"
        formcuapcuap.appendChild(labelnama)

        const inputnama=document.createElement("input")
        inputnama.type="text"
        inputnama.name="nama"
        inputnama.id="nama"
        inputnama.rows="1"
        inputnama.placeholder="Namamu disini"
        inputnama.readOnly=true
        formcuapcuap.appendChild(inputnama)


        const textsignoutnya=document.createElement("span")
        textsignoutnya.innerText="Ganti akun?"
        textsignoutnya.style="color: #00146b;cursor: pointer;font-size:smaller;"
        textsignoutnya.setAttribute("onclick","unauthorized()")

        formcuapcuap.appendChild(textsignoutnya)
        formcuapcuap.appendChild(brkln)
        

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