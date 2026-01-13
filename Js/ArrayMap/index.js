// Array.prototype.myMap = function (callback, thisArgs) {
//   if (typeof callback !== "function") {
//     throw new TypeError(`${callback} is not a Function`);
//   }

//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     //  const value = callback(this[i], i, this); // Not use this, context binding absent here
//     const value = callback.call(thisArgs, this[i], i, this);
//     result.push(value);
//   }

//   return result;
// };

// const elems = [1, 2, 3, 4, 5, 6];

// const result = elems.myMap((element, idx, array) => {
//   return element * element;
// });

// console.log(result);

Array.prototype.customeMap = function (callback, thisArgs) {
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a Function`);
  }
  const res = [];
  for (let i = 0; i < this.length; i++) {
    const value = callback.call(thisArgs, this[i], i, this);
    res.push(value);
  }
  return res;
};

const users = [
  {
    name: "sathya",
    email: "sathya@gmail.com",
    passwoed: "1234",
  },
  {
    name: "shyama",
    email: "shyama@gmail.com",
    passwoed: "1234",
  },
  {
    name: "hari",
    email: "hari@gmail.com",
    passwoed: "1234",
  },
];

const modifiedUser = users.customeMap((elem, index, array) => {
  return {
    id: index,
    name: elem.name,
    email: elem.email,
  };
});

console.log(modifiedUser);
