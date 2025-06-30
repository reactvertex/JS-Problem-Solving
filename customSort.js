
function customSort(arr) {
  //create two array for string and numeric types of element
  var strArr = [];
  var numArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof strArr == "string") {
      strArr[strArr.length] = arr[i]
    }
    if (typeof numArr == "number") {
      numArr[numArr.length] = arr[i]
    }
  }
  console.log(numArr, "numArr", strArr)

  //sort string list
  for (let i = 0; i < strArr.length; i++) {
    for (let j = i + 1; j < strArr.length - 1; j++) {
      if (strArr[i] > strArr[j]) {
        [strArr[i], strArr[j]] = [strArr[j], strArr[i]]
      }
    }
  }
  //sort the numberlist
  for (let i = 0; i < numArr.length; i++) {
    for (let j = i + 1; j < numArr.length - 1; j++) {
      if (numArr[i] > numArr[j]) {
        [numArr[i], numArr[j]] = [numArr[j], numArr[i]]
      }
    }
  }
  return strArr.concat(strArr)
}



const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
customSort(input);

// result - ["a", "c", "e", "g", "s", 1, 2, 5, 6]