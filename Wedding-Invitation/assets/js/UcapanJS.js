const SHEET_ID = '1U_apKzNzsmmV_3DvFxjnI8t7G67ELZisDm5pOIxiLpk';
const API_KEY = 'AIzaSyBWLiCwazxX-joobuNWWeJ_0_CKCGT77rk';
const CLIENT_EMAIL = 'googleapispreedsheet@wedding-invitation-test1.iam.gserviceaccount.com';
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCk7/jS+JRMkreW\nq3XJCfbiOWGQd/lgDgViY4BVIvG3q5wfB+jMIWqLvjyy6JpUBzhY6azZQWRf0WOo\noyW3ciRaIQ7ZNVGqNlm7IAenM1eRjp1kbqf5H3wDm2aoXH4jnCX8UmsRzDfw0tCV\naczEewkmb0NOhKy9B9wkBALBSrBufgPu5eDMuvBQSxnJWcEPXCxKBv00Ww3rSvb9\nXdhNisLpuTjUjhyC3ynleF0wr4+cATmrApgYdh0Y+6g7V/qB2bI/iFILVPXDiC3U\ne2JdMo+UlHpZd64gxEYDIdnJKApnW20Oloy6ZpnZD2U8ncF6xUpbmvBhpxlR+m82\nxoUzrdwpAgMBAAECggEADN12dT9EMwJVLVyPpggf0Ja89lOzWQOS9jEQbSOaAtNx\nDKcVaJm5KbADpElaI1CCW8YTUElmWsZ2fWyHWDsgHIMcWUMsTOhrIJpPmoI50/3R\np0gt1DPZXJ8qF1sKkDzBZkBn/1YEbYWGFUdwvEkkBjJSx8y3vBFhQZJqBBlvMFkG\nGVb8CPX3frCpTG+G0OIt/GODa8tLNwfEglSpQGv+DYWJWOM3y088b2NlzI+IE6L+\nhKzV20hBnSFaYDbT+0l9/GP01jQSCSKLtIW/x/BJfKYgaGza+ctMcerUznYtl1Kg\n9eQ5fhMQWA0mEU7hxJB3Sos4UUSg4iPaRy5rTUAoQQKBgQDZ4SbPFzgFemzkhiIE\nmkVIy3/b3xY4eBzD3Qwk3Yf99WNG1oaAzuxv5xr3nKu7665VQkHEM8nzx84KDKf4\nD/c29itH1AJW9tOiAd13qWrQN6XzmiSV8DEQ70gbY+t+lDKv9RVigCkgJRcITTOx\nYnoF7mBRrv63zGDWOxawgpKOwQKBgQDBy4mAwB80fpWMsLGl9rOZoT7YAFeU8zpx\nMeBBGH9LEQoQCzW6g1AubazB0gWV2D8AvuWydy/WiporzcLSyD+AyEyLzrlQqLtK\nNX0ReSCmCEKtAWdefmwe8BeuSvIQF0f/xe5xtQ0L33ohux12Z1hjm17SYWgQp7YI\nyKvIEDQPaQKBgQCGYyiT3YdxYZTe05kR67HGd7aSgKRtCjD74lEGQBoMW5nzbIij\n1H3je9GXXuxSSclKz0ZPZX4wPlJowmusRvS90tLZR/x1dWMN70aR805txZU3jyD3\n1qH9Bwob0uLDPVeSToH1MoWrTRVKyouS4uHO3LxORbjY11f3a5TQJImPQQKBgQCB\nQT7p17o4agFW//bMydmKKyjeKoQ/vWaKXwjCghNMvwWmI8PnLXQKM25ZK7o78io7\nVhefy6zlfDZN5wP9UEBCpdWgHfYt3Qxl93z+bXqgIrxN5bTLKqj0jZBN2IDQyKZl\n6t8Zifc0pw4vdzy0X0Nt1BAPY5ZkHWflPeqNGnmOmQKBgQCoQYCG6GvlS6cVJgF4\nyhRt3j3QT823mXEJr6P96tWg5GTe0WelPQZsfmLF8eoiXP1GQ2J5EWPjTjwHR5FK\n/gtKkUk9NmqLhgus/9zE7MM8lYG7f+8NAQsCSJtF6eCVxh8m8b8g8MYgRX8u/mVJ\ni3XGIVOQROcc1CvsWbLoLJZ0hA==\n-----END PRIVATE KEY-----\n";

const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Tabelnya:append?valueInputOption=RAW`;



// Menangkap submit form
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman web untuk direfresh saat tombol submit diklik
  
    // Mendapatkan nilai dari input nama dan textarea ucapan
    const nama = document.getElementById('nama').value;
    const ucapan = document.getElementById('ucapan').value;
    const kehadiran=document.querySelector('input[name="kehadiran"]:checked').value;

    const databuatdimasukin={
      "values":[
        [nama,kehadiran,ucapan],
      ]};

    console.log(`${generateJwtToken(CLIENT_EMAIL, PRIVATE_KEY)}`)

    fetch(apiUrl,{
      method:'POST',
      headers: {
        'Authorization': `Bearer ${generateJwtToken(CLIENT_EMAIL, PRIVATE_KEY)}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(databuatdimasukin)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    
    /*
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/1U_apKzNzsmmV_3DvFxjnI8t7G67ELZisDm5pOIxiLpk/values/Sheet1:append?valueInputOption=RAW&key=AIzaSyBWLiCwazxX-joobuNWWeJ_0_CKCGT77rk`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(databuatdimasukin),
    })
    */

    /*
    gapi.client.sheets.values.append({
      spreadsheetID:"1U_apKzNzsmmV_3DvFxjnI8t7G67ELZisDm5pOIxiLpk",
      range:"Tabelnya",
      valueInputOption:"RAW",
      resource:databuatdimasukin,
      key:"AIzaSyBWLiCwazxX-joobuNWWeJ_0_CKCGT77rk",
    }).then((response)=>{
      console.log(response.result)
    })
    */
    // Membersihkan form setelah ucapan dikirimkan
    document.getElementById('nama').value = '';
    document.getElementById('ucapan').value = '';
    document.querySelector('input[name="kehadiran"]:checked').checked=false;
  });

  function generateJwtToken(clientEmail, privateKey) {
    const now = Math.floor(Date.now() / 1000);
    const HeadTxt = "{ alg: 'HS256', typ: 'JWT' }"
    //const jwtHeader = getBase64Encoded(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const jwtHeader = getBase64Encoded(HeadTxt);
    const ClaimTxt = `{
      iss: clientEmail,
      sub:clientEmail,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://www.googleapis.com/oauth2/v4/token',
      exp: ${now + 3600},
      iat: ${now}
    }`
    // const jwtClaimset = getBase64Encoded(JSON.stringify({
    //   iss: clientEmail,
    //   sub:clientEmail,
    //   scope: 'https://www.googleapis.com/auth/spreadsheets',
    //   aud: 'https://www.googleapis.com/oauth2/v4/token',
    //   exp: now + 3600,
    //   iat: now
    // }));
    const jwtClaimset = getBase64Encoded(ClaimTxt)
    const jwtSignature =  CryptoJS.HmacSHA256(`${jwtHeader}.${jwtClaimset},${privateKey}`);
    const Sign64 = CryptoJS.enc.Base64.stringify(jwtSignature)
    return `${jwtHeader}.${jwtClaimset}.${Sign64}`;
  }

  function getBase64Encoded(rawStr){
    var wordArray = CryptoJS.enc.Base64.parse(rawStr);
    var result = CryptoJS.enc.Base64.stringify(wordArray);
    return result
  }

  function getBase64Decoded(encStr){
    var wordArray = CryptoJS.enc.Base64.parse(encStr);
    var result = wordArray.toString(CryptoJS.enc.Utf8);
    return result
  }

  //CSV
  //https://1drv.ms/u/s!ArGsxJ1nGw1ciqdV39kRl8jwDSmnBQ?e=ut41dL

  //XLSX
  //https://1drv.ms/x/s!ArGsxJ1nGw1ciqdXSF63sK4hhQ_xXg?e=jMTq49
  