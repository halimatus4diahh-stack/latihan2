// variabel untuk menyimpan porsi makan kucing
// dengan nilai awal nol (0))
let porsi = 0

function beriMakan() {
  // Tambah porsi makan +1
  porsi = porsi + 1
  
  updatetampilan()
}

// fungsi mengajak main kucing (porsi dikurangi 1)
function ajakmain() {
  // mengurangi porsi 1 tapi cegah jangan sampai negatif 
  if (porsi > 0) {
    porsi = porsi - 1
  }
  
  updatetampilan()
}

function reset() {
  porsi = 0
  
  updatetampilan()
}

// fungsi untuk memperbarui tampilan html
function updatetampilan() {
  // update angka porsi makan
  document.getElementById('teks-porsi').innerText = porsi
  
  if (porsi >= 20) {
    // ganti gambar kucing menjadi kucing gemuk
    document.getElementById('foto-kucing').src = "gambar/kucing gemuk.jpg"
    
    // menampilkan tulisan kucing gemuk
    document.getElementById('status-kucing').innerText = "kucing gemuk 😽"
  } else if (porsi >= 10) {
    // ganti gambar kucing menjadi kucing sedang
    document.getElementById('foto-kucing').src = "gambar/kucing sedeng.jpg"
    
    // menampilkan tulisan kucing sedang
    document.getElementById('status-kucing').innerText = "kucing sedang 😻"
  } else {
    // ganti gambar kucing menjadi kucing kurus 
    document.getElementById('foto-kucing').src = "gambar/kucing kurus.jpg"
    
    // menampilkan tulisan kucing kurus 
    document.getElementById('status-kucing').innerText = "kucing kurus 😻"
  }
}