import fs from "fs";

// Read file as Buffer
const bufferData = fs.readFileSync("input.txt");

// Buffer Information
console.log("Raw Buffer : ");
console.log(bufferData);

console.log("\nBuffer Length : ");
console.log(bufferData.length);

console.log("\nBuffer in UTF-8");
console.log(bufferData.toString());

// Create New Buffer
const customBuffer = Buffer.from("Learning Buffers");

console.log("\nCustom Buffer : ");
console.log(customBuffer);

console.log("\nCustom Buffer Text : ");
console.log(customBuffer.toString());

// Write Buffer Into New File
fs.writeFileSync("copied.txt", bufferData);
console.log("\nFile copied successfully");
