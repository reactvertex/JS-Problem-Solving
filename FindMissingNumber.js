function findMissingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;

    const totalSum =  nums.reduce((acc, curr) => {
       return acc = acc + curr;
    }, 0)
    return expectedSum - totalSum;
}

findMissingNumber([0,1,3]);