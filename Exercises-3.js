var nama = 'Zahrah'
var peran = 'Tabib'

if(nama == '' && peran == '') {
  console.log("Kamu harus memasukkan nama dan peranmu!");
}
else if(nama == '') {
  console.log("Nama harus diisi!")
}
else if(peran == '') {
  console.log("Kamu harus memasukkan peran!")
}
else{
  if(peran == 'Ksatria') {
    console.log("Selamat datang di Dunia Proxytia," , nama , "\n" + "Halo Ksatria" , nama + ", kamu dapat menyerang dengan senjatamu!")
  }
  if(peran == 'Tabib') {
    console.log("Selamat datang di Dunia Proxytia," , nama , "\n" + "Halo Tabib" , nama + ", kamu akan membantu temanmu yang terluka.")
  }
  if(peran == 'Penyihir') {
    console.log("Selamat datang di Dunia Proxytia," , nama , "\n" + "Halo Penyihir" , nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
  }
  if(peran !== "Ksatria" && peran !== "Tabib" && peran !== "Penyihir") {
    console.log("Peran tidak terdaftar")
  }
}