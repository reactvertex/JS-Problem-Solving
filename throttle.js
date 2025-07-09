
function throttle(func, delay) {
  let lastCall = 0;
  let lastResult;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      lastResult = func(...args);
    }
    return lastResult;
  }
}
const throttledFn = throttle(() => console.log('Function called!'), 1000);
module.exports = throttle;
