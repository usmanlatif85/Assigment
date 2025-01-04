let celsiusArray=[15,23,18,27,30,25,19,22,28,16,20,24,21,29,17]
let fahrenhiArray=celsiusArray.map(celsius =>
  (celsius * 9/5) +32)
console.log(fahrenhiArray)