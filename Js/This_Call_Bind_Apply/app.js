import { user1, user2 } from "./users.js";
import { sendNotification } from "./notifier.js";

// .call()

console.log("Using call() : ");

sendNotification.call(user1, "Pizza", 299);

sendNotification.call(user2, "Burger", 149);

// .apply()
console.log("\nUsing apply() : ");

sendNotification.apply(user1, ["Pasta", 399]);
sendNotification.apply(user2, ["Momos", 129]);

// .bind()
console.log("\nUsing bind() : ");

const order1 = sendNotification.bind(user1, "Biriyani", 249);
const order2 = sendNotification.bind(user2, "Roll", 99);

order1();
order2();
