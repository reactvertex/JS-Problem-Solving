function chunkArray(arr, n) {
    const len = arr.length % n;
    if (arr.length) {
        let newArr = []
        let lastIndex;
        for (let i = 0; i <= arr.length; i += n) {
            if (lastIndex != undefined) {
                newArr.push(arr.slice(lastIndex, i))
            }
            lastIndex = i
        }
        if (len) {
            newArr.push(arr.slice(-len))
        }
        return newArr
    }
    return []
}

//For the purpose of user debugging.
//pass your array and chunk size in function call
chunkArray([1, 2, 3], 5);

// use case

// Input: ([1,2,3,4], 2)
// Output: [[1,2], [3,4]]

// Input: ([1,2,3,4,5], 2)
// Output: [[1,2], [3,4], [5]]

// Input: ([], 2)
// Output: []

// Input: ([1, 2, 3], 5)
// Output: [[1, 2, 3]]