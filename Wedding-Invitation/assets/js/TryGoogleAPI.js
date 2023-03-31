fetch('https://sheets.googleapis.com/v4/spreadsheets/1U_apKzNzsmmV_3DvFxjnI8t7G67ELZisDm5pOIxiLpk/values/Tablenya?key=AIzaSyBWLiCwazxX-joobuNWWeJ_0_CKCGT77rk')
  .then(response => response.json())
  .then(data => {
    console.log(data.values[1])
  })