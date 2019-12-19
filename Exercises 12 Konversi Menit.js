function konversiMenit(menit) {
    // you can only write your code here!
    var hour = Math.floor(menit/60).toString()
    let minutes = (menit % 60).toString()

    if(minutes.length === 1 && minutes !== "0") {
        minutes = "0" + minutes
    }
    return hour + ":" + minutes
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:0