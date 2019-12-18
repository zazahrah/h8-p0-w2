// 1. Menyusun Barisan Bintang
var rows1 = 5// input the number of rows
var bintang = "*"
for (i=0; i<rows1; i++) {
    console.log(bintang)
}

console.log("===============================================================================")

//2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5
var bintang = ""

for(i=0; i<rows2; i++) {
    for(j=0; j<rows2; j++) {
      bintang += "*"
    }
    bintang += "\n";
}
console.log(bintang)

console.log("===============================================================================")

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5
var bintang = "";
  for(x=0; x<rows3; x++) {
    for(y=0; y<=x; y++) {
      bintang += "*"
    }
    console.log(bintang)
    bintang = "";
  }