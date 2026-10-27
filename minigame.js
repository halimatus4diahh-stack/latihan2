// variabel untuk menyimpan porsi makan kucing
// dengan nilai awal nol (0))
let porsi = 0

function beriMakan() {
  // Tambah porsi makan +1
  porsi = porsi + 1
  
  // update angka porsi makan
  document.getElementById('teks-porsi').innerText = porsi
  
  if (porsi >= 15) {
    // ganti gambar kucing menjadi kucing gemuk
    document.getElementById('foto-kucing').src = "gambar/kucing gemuk.jpg"
    
    // menampilkan tulisan kucing gemuk
    document.getElementById('status-kucing').innerText = "kucing gemuk 😽"
  } else if (porsi >= 7) {
    // ganti gambar kucing menjadi kucing sedang
    document.getElementById('foto-kucing').src = "gambar/kucing sedeng.jpg"
    
    // menampilkan tulisan kucing sedang
    document.getElementById('status-kucing').innerText = "kucing sedang 😻"
  }
}