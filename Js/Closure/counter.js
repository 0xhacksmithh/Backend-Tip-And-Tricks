function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log("Incremented :: ", count);
    },

    decrement() {
      count--;
      console.log("Decremented :: ", count);
    },

    getCount() {
      return count;
    },
  };
}

export default createCounter;
