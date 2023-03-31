// Menangkap submit form
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman web untuk direfresh saat tombol submit diklik
  
    // Mendapatkan nilai dari input nama dan textarea ucapan
    const nama = document.getElementById('nama').value;
    const ucapan = document.getElementById('ucapan').value;
    const kehadiran=document.getElementsByName('kehadiran').value;
  
    // Menuliskan ucapan ke dalam file teks
    const fs = require('fs');
    fs.appendFileSync('assets\data\daftar-ucapan.txt', `${nama} \cuthere ${kehadiran} \cuthere ${ucapan}\n`);
  
    // Membersihkan form setelah ucapan dikirimkan
    document.getElementById('nama').value = '';
    document.getElementById('ucapan').value = '';
    document.getElementsByName('kehadiran').value='';
  });

  //CSV
  //https://1drv.ms/u/s!ArGsxJ1nGw1ciqdV39kRl8jwDSmnBQ?e=ut41dL

  //XLSX
  //https://1drv.ms/x/s!ArGsxJ1nGw1ciqdXSF63sK4hhQ_xXg?e=jMTq49
  