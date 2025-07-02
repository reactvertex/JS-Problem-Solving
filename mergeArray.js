function mergeData(arr1, arr2) {
    let obj = {}

    arr1.forEach((val, index) => {
        obj[val.id] = { ...val }
    })

    arr2.forEach((val, index) => {
        if (obj[val.id]) {
         obj[val.id] = {...obj[val.id], ...val}
        } else {
        obj[val.id] = {...val}
       }
    })
    console.log(Object.values(obj))
    return Object.values(obj)
}


const arr1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const arr2 = [{ id: 2, age: 30 }, { id: 3, name: "Charlie" }]
mergeData(arr1, arr2);

// result : 
// [
//   {
//     "id": 1,
//     "name": "Alice"
//   },
//   {
//     "id": 2,
//     "name": "Bob",
//     "age": 30
//   },
//   {
//     "id": 3,
//     "name": "Charlie"
//   }
// ]