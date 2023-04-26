function authorize() {
    const clientId = '425332619627-mmdod0nr7ggqnodk02f18c2jhjgeansf.apps.googleusercontent.com';
    const params = new URLSearchParams(document.location.search);
    const S1 = params.get("S");
    const redirectUri = 'https://muhammadrifky51.github.io/Wedding-Invitation/Undangan.html?S='+S1;
    const scope = 'https://www.googleapis.com/auth/drive';
  
    const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
  
    window.location.href = url;
  }