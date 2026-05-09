function downloadFile(fileName) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading ${fileName}...`);

    setTimeout(() => {
      const success = Math.random() > 0.3;

      if (success) {
        resolve(`${fileName} downloaded successfully`);
      } else {
        reject(`${fileName} download failed`);
      }
    }, 2000);
  });
}

export default downloadFile;
