function xo(str) {
    // you can only write your code here!
    let jumlahX = 0
    let jumlahO = 0
    for(i=0; i<str.length; i++) {
      if(str[i] === "x") {
        jumlahX++
      }
      if(str[i] === 'o') {
        jumlahO++
      }
    }
    if(jumlahX == jumlahO) {
      return true
    }
    else {
      return false
    }
}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true