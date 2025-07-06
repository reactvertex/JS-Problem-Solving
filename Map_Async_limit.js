async function mapAsyncLimit(arr, limit, asyncFn) {
    const result = [];
    let i = 0;

    const workers = new Array(limit).fill(0).map(async function worker() {
        while (i < arr.length) {
            const currentIndex = i++;
            result[currentIndex] = await asyncFn(arr[currentIndex]);
        }
    });

    await Promise.all(workers);
    console.log(result)
    return result;
}

//For the purpose of user debugging.
//pass appropiate input in below function call
const arr = [1, 2, 3, 4];
const delayFn = x => new Promise((resolve) => setTimeout(() => resolve(x * 2), 100));

mapAsyncLimit(arr, 2, delayFn);
