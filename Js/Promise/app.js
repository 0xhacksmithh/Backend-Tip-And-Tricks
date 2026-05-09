import downloadFile from "./downloader.js";

downloadFile("movie.mp4")
  .then((message) => {
    console.log("SUCCESS:", message);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  })
  .finally(() => {
    console.log("Download process finished");
  });
