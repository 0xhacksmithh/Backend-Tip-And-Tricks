### What is a Buffer?

A Buffer is:

- raw binary memory used to store data temporarily.

Node.js uses Buffers because:

- JavaScript normally handles text well
- but files/images/videos are binary data

## Understanding Buffer Data

**Example:**

```
48 65 6c 6c 6f
```

**These are:**

- hexadecimal byte values

**representing:**

```
Hello
```

## Core Buffer Methods

### Create Buffer

```c
Buffer.from("Hello")
```

### Convert Buffer to String

```c
buffer.toString()
```

### Allocate Memory

```c
Buffer.alloc(10)
```

Creates empty buffer of 10 bytes.

## Real Backend Use Cases

### 1. File Uploads

Libraries like:

- Multer
- Busboy

use buffers internally.

### 2. Image Processing

```c
fs.readFileSync("photo.png")
```

returns binary buffer data.

### 3. Encryption

```c
crypto.createHash("sha256")
```

works with buffers internally.

### 4. WebSocket Communication

Binary packets are transferred using buffers.

### Buffer + Stream Connection

Streams internally use Buffers:

- read chunk
- store in buffer
- process gradually

That’s why streams are memory efficient.

### Buffer Comparison

```c
const b1 = Buffer.from("Hello");
const b2 = Buffer.from("Hello");

console.log(b1.equals(b2));
```

Output:

```
true
```
