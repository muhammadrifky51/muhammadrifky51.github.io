//var xhr = new XMLHttpRequest();

/*
var data =
'resource=[my resource]' +
'&client_id=' + clientId +
'&code=' + authCode +
'&grant_type=authorization_code' +
'&response_type=token';
var dataFinal = encodeURI(data);
*/

/*
var obj = {
    method: 'GET' ,
    //mode : 'no-cors',
    headers: {
        'Access-Control-Request-Origin':"https://login.microsoftonline.com/1e21e75c-d917-49ec-8ca8-d6f14ead5a65/oauth2/v2.0/token",
        'Access-Control-Request-Headers': 'Authorization',
        'Authorization': 'Basic '+ btoa("1e21e75c-d917-49ec-8ca8-d6f14ead5a65"+":"+"56536c74-8f69-4dd5-8964-a597f3690479"),
        'Content-Type': 'application/json',
        'Origin': ''
    },
    credentials: 'include'
  };
*/

/*
var data =
'resource=[my resource]' +
'&client_id=' + "1e21e75c-d917-49ec-8ca8-d6f14ead5a65" +
'&code=' + "56536c74-8f69-4dd5-8964-a597f3690479" +
'&grant_type=client_credentials' +
'&response_type=token';
var dataFinal = encodeURI(data);
*/

/* 
xhr.open('POST', url, true);
xhr.withCredentials = true;
xhr.setRequestHeader('Access-Control-Allow-Origin', '[something]');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        //do something
    }
}
xhr.send(dataFinal);
*/

/*
xhr.open('POST', "https://login.microsoftonline.com/a803a1bf-4fa4-406c-bcf4-974e78cfdc5d/oauth2/v2.0/token", true);
xhr.withCredentials = true;
xhr.setRequestHeader('Access-Control-Allow-Origin', '[something]');
//xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        console.log(xhr.response)
    }
}
xhr.send(dataFinal);
*/

/*
fetch('https://login.microsoftonline.com/1e21e75c-d917-49ec-8ca8-d6f14ead5a65/oauth2/v2.0/token', obj)
.then(response =>response.blob())
.then(blob =>{
    console.log(blob)
})
*/

var fileToken = "5C0D1B679DC4ACB1!168919/!ANfTSlmMKJ4Eg2s/"
var ewa = null;
