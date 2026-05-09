### Why Closure is powerful here

The variable count:

- stays alive in memory
- is private
- cannot be modified directly from outside

Only the returned functions can access it.

## Real Backend Use Cases

### 1. Rate Limiter

```c
function rateLimiter(limit) {
  let count = 0;

  return function () {
    if (count < limit) {
      count++;
      return "Allowed";
    }

    return "Blocked";
  };
}
```

### 2. Database Connection Singleton

```c
function createDBConnection() {
  let connection;

  return function () {

    if (!connection) {
      connection = "Connected to DB";
    }

    return connection;
  };
}
```

### 3. Authentication Middleware Factory

```c
function authorize(role) {

  return function (req, res, next) {

    if (req.user.role === role) {
      next();
    } else {
      res.status(403).send("Forbidden");
    }
  };
}
```
