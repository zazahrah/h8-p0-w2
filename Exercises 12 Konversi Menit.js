function konversiMenit(menit) {
    // you can only write your code here!
    var minutes = Math.floor(menit/60).toString()
    let seconds = (menit % 60).toString()

    if(seconds.length === 1 && seconds !== "0") {
        seconds = "0" + seconds
    }
    return minutes + ":" + seconds
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:0