function flattenArray(arr) {
    let newArr = [];
    if (arr.length) {
        arr.map(val => {
            if (Array.isArray(val)) {
                newArr = newArr.concat(flattenArray(val))
            } else {
                newArr.push(val)
            }
        })
    }
    return newArr
}

flattenArray([1, [2, [3, 4], 5], 6]);