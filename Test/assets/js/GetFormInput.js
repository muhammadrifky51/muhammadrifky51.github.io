// Menangkap submit form
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman web untuk direfresh saat tombol submit diklik
  
    // Mendapatkan nilai dari input nama dan textarea ucapan
    const nama = document.getElementById('nama').value;
    const ucapan = document.getElementById('ucapan').value;
  
    // Menuliskan ucapan ke dalam file teks
    const fs = require('fs');
    fs.appendFileSync('daftar-ucapan.txt', `${nama}: ${ucapan}\n`);
  
    // Membersihkan form setelah ucapan dikirimkan
    document.getElementById('nama').value = '';
    document.getElementById('ucapan').value = '';
  });
  