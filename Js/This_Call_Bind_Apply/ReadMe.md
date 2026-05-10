## Core Concept of this

`this` refers to:

- the object that is currently executing the function.

Example:

```
const user = {
  name: "Satyabrata",

  greet() {
    console.log(this.name);
  }
};

user.greet();
```

Output:

```
Satyabrata
```

## Real Backend Use Cases

### 1. Borrowing Methods

```c
const admin = {
  role: "Admin"
};

function showRole() {
  console.log(this.role);
}

showRole.call(admin);
```

### 2. Event Handlers

```c
button.addEventListener(
  "click",
  user.handleClick.bind(user)
);
```

Without bind, this may refer to the button element.

### 3. Express Middleware Factory

```c
function logger(prefix) {

  return function(req, res, next) {
    console.log(prefix, req.url);
    next();
  };
}
```

Closures + binding patterns are used heavily here.
