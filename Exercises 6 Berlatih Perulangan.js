// 1. Melakukan Looping Menggunakan While
console.log("LOOPING PERTAMA")
var count = 2
while(count <=20) {
  console.log(count + " I love coding");
  count += 2;
}
console.log("LOOPING KEDUA") 
var count = 20
while(count >1) {
  console.log(count + " I will become fullstack developer")
  count -= 2
}

console.log('==========================================================================================================')

// 2. Melakuka Looping Menggunakan For
console.log('LOOPING PERTAMA');
for(i=0; i<=20; i++) {
  console.log(i + 1 + " - I love coding")
}
console.log("LOOPING KEDUA");
for(i=20; i>=0; i--) {
  console.log(i + " - I will become fullstack developer")
}

console.log('==========================================================================================================')

//3. Angka Ganjil dan Genap
for(i=1; i<=100; i++) {
  if(i % 2 == 0) {
    console.log(i , "GENAP")
  }
  else {
    console.log(i , "GANJIL")
  }
}
  
for(j=1; j<=100; j+=2) {
  if(j % 3 == 0) {
    console.log(j , " KELIPATAN 3")
  }
  else {
    console.log("")
  }
}
  
for(k=1; k<=100; k+=5) {
  if(k % 6 == 0) {
    console.log(k , " KELIPATAN 6")
  }
  else {
    console.log("")
  }
}
  
for(l=1; l<=100; l+=9) {
  if(l % 10 == 0) {
    console.log(l , " KELIPATAN 10")
  }
  else {
    console.log("")
  }
}