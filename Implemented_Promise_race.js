function promiseRace(promises) {
  function isPromise(obj) {
    return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
  }

  // Optional: validate the input
  if (!Array.isArray(promises)) {
    throw new TypeError("Never settles (Same as native Promise.race)");
  }

  // Optionally log if the first one is a Promise
  if (!isPromise(promises[0])) {
    console.log("First element is not a Promise");
  }

  return Promise.race(promises);
}

//For the purpose of user debugging.
//pass appropiate input in below function call.
promiseRace([43, Promise.resolve(2)]);
module.exports = promiseRace
