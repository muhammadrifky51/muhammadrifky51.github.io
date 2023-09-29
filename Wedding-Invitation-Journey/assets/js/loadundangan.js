/*const accessToken = 'your-access-token';
const fileId = 'your-file-id';
const endpoint = `https://graph.microsoft.com/v1.0/me/drive/items/${fileId}/content`;
fetch(endpoint, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
}) */

fetch('https://1drv.ms/x/s!ArGsxJ1nGw1ciqdXSF63sK4hhQ_xXg?e=4QMHWe', { mode: 'no-cors' })
  .then(response => response.blob())
  .then(blob => {
    const reader = new FileReader();
    reader.onloadend = function(event) {
        const data = event.target.result;
        var workbook = XLSX.read(data, {type: "array"});
        var sheetName = workbook.SheetNames;
        console.log(sheetName)
        var worksheet = workbook.Sheets["Sheet2"];
        var rows = XLSX.utils.sheet_to_json(worksheet, {header:1});
        var list = document.getElementById("excel-list");
        for (var i = 0; i < rows.length; i++) {
            var listItem = document.createElement("li");
            listItem.innerHTML = rows[i][0];
            list.appendChild(listItem);
        }
    };
    reader.readAsArrayBuffer(blob);
    console.log(blob)
  });


  /*Value="ksc8Q~fQ.UZw5Ugrr~99y6UCtqEEopsedURU2bnn"
  SecretID="56536c74-8f69-4dd5-8964-a597f3690479"
  TenantID="a803a1bf-4fa4-406c-bcf4-974e78cfdc5d"
  ClientID="1e21e75c-d917-49ec-8ca8-d6f14ead5a65"*/