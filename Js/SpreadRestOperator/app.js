import { cart1, cart2, user } from "./products.js";
import { calculateTotal } from "./utils.js";

// Spread Operator With Arrays
const mergedCart = [...cart1, ...cart2];

console.log("Merged Cart : ");
console.log(mergedCart);

// Spread Operator With Objects
const updateUser = {
  ...user,
  premium: true,
  city: "Bangalore",
};

console.log("\nUpdated User : ");
console.log(updateUser);

// Clone Array Using Spread
const clonedCart = [...mergedCart];

console.log("\nCloned Cart : ");
console.log(clonedCart);

// Rest Operator In Function

const totalPrice = calculateTotal(...mergedCart);

console.log("\nToal Price : ", totalPrice);
