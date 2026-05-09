import createCounter from "./counter.js";

const c1 = createCounter();
const c2 = createCounter();

c1.increment();
c1.increment();

console.log("Counter-1 Value :: ", c1.getCount());

c2.increment();

console.log("Counter-2 Value :: ", c2.getCount());
