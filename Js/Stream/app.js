import fs from "fs";

// Create Read Stream
const readStream = fs.createReadStream("./input.txt", {
  encoding: "utf-8",
  highWaterMark: 20,
});

// Create Write Stream
const writeStream = fs.createWriteStream("output.txt");

// //////////// Using Pipe ////////////////

// readStream.pipe(writeStream);
// console.log("File copy started ...........");

// Read Data in Chunks

readStream.on("data", (chunk) => {
  console.log("\nReceived Chunk: ");
  console.log(chunk);

  // write chunk into output file
  writeStream.write(chunk);
});

// Straem End
readStream.on("end", () => {
  console.log("\nFile Copy Completed");
  writeStream.end();
});

// Error Handling
readStream.on("error", (error) => {
  console.log("Error : ", error);
});
