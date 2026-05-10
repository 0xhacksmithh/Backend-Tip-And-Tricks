### Why Streams?

Without streams:

- entire file loads into memory

Problem:

- huge memory usage
- slow performance

With streams:

- data is processed in chunks

Efficient for:

- GB-sized files
- video processing
- logs
- CSV parsing

## Real Backend Use Cases

### 1. Video Streaming Server

```c
app.get("/video", (req, res) => {

  const stream =
    fs.createReadStream("movie.mp4");

  stream.pipe(res);
});
```

### 2. CSV Processing

```c
fs.createReadStream("users.csv")
```

Used for:

- analytics
- ETL pipelines
- data engineering

### 3. File Uploads

Libraries like:

- Multer
- Busboy

use streams internally.

## Types of Streams in Node.js

| Type      | Purpose                     |
| --------- | --------------------------- |
| Readable  | Read data                   |
| Writable  | Write data                  |
| Duplex    | Read + Write                |
| Transform | Modify data while streaming |

## Transform Stream Example

```c
const { Transform } = require("stream");

const upperCaseTransform =
  new Transform({

    transform(chunk, encoding, callback) {

      this.push(
        chunk.toString().toUpperCase()
      );

      callback();
    }
  });
```

Used in:

- compression
- encryption
- data formatting
- log processing
