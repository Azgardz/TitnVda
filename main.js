const password = "titnVda";

let guess = prompt("Masukkan Password");
while (guess !== password) {
  guess = prompt("password anda salah");
}
alert("selamat menikmati");
alert("ada beberapa aturan: pertama, harus buka lewat google chrome");
alert(
  "klik gambar untuk membuka lembaran, dan klik warna biru untuk menutup lembaran"
);
alert(
  "ketika wes tampil sebuah lembaran, klik tanda titik tiga pojok kanan atas, dan aktifkan mode dekstop"
);
alert("terimakasih :)");

var audioPlaying = true;
