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
if (code) {
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
  
        console.log(accessToken)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  } else {
    console.log("Blm Login")
  }