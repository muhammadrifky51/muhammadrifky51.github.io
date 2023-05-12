function authorize() {
    const clientId = '425332619627-mmdod0nr7ggqnodk02f18c2jhjgeansf.apps.googleusercontent.com';
    const params = new URLSearchParams(document.location.search);
    const S1 = params.get("S");
    const redirectUri = 'https://muhammadrifky51.github.io/Wedding-Invitation/Undangan.html?S='+S1;
    const scope = 'https://www.googleapis.com/auth/drive';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let state = '';

    function generateRandomState(length) {
    for (let i = 0; i < length; i++) {
        state += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return state;
    }
    const randomState = generateRandomState(50);
    
    const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code&state=${randomState}`;
  
    window.location.href = url;
  }

function unauthorized(){
    sessionStorage.removeItem("accessToken")
    sessionStorage.removeItem("expiresIn")
    sessionStorage.removeItem("refreshToken")
    sessionStorage.removeItem("namaPengguna")

    document.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;

    //window.location.reload();
}

function getuser() {
    const accessToken=sessionStorage.getItem("accessToken")
    const uri="https://www.googleapis.com/oauth2/v2/userinfo"

    if(sessionStorage.getItem("namaPengguna")){
    fetch(uri,{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${accessToken}`
        }
    })
    .then((response)=>response.json())
    .then((data)=>{
        sessionStorage.setItem("namaPengguna",data.name)
    })
    }
}