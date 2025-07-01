function groupBy(arr, key) {
    let obj = {}
    arr.forEach((val) => {
        const groupKey = val[key];
        if (groupKey in obj) {
            obj[groupKey].push(val);
        } else {
            obj[groupKey] = [val];
        }
    })
    return obj

}
groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
], 'age');

// result : {
//   '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
//   '30': [ { name: 'Bob', age: 30 } ]
// }