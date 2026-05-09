import users from "./user.js";

// Create Usernames
const userNames = users.map((user) => {
  return user.name.toLowerCase().replaceAll(" ", "_");
});

console.log("UserNames :: ");
console.log(userNames);

// Fornat User Details
const formattedUsers = users.map((user, index) => {
  return {
    id: index + 1,
    fullName: user.name,
    email: user.email,
    isAdult: user.age >= 18,
  };
});

console.log("\nFormatted Users :: ");
console.log(formattedUsers);

// Extract only Emails
const emails = users.map((user) => user.email);
console.log("\nEmails :: ");
console.log(emails);

// Generate welcome message
const messages = users.map((user) => {
  return `Welcome ${user.name}`;
});

console.log("\nMessage :: ");
console.log(messages);
