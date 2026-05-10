### Decorators are used to:

- add extra functionality
- without modifying original code

## How Decorator Works

### Original Function:

```c
fetchUser()
```

### Decorated Version:

```c
withExecutionTime(
  withLogging(fetchUser)
)
```

### Each decorator:

- wraps the original function
- adds behavior
- returns a new enhanced function

## Real Backend Use Cases

### 1. Authentication Decorator

```c
function requireAuth(fn) {

  return function(user, ...args) {

    if (!user) {
      throw new Error("Unauthorized");
    }

    return fn(user, ...args);
  };
}
```

### 2. Caching Decorator

```c
function cache(fn) {

  const store = {};

  return function(key) {

    if (store[key]) {
      return store[key];
    }

    const result = fn(key);

    store[key] = result;

    return result;
  };
}
```

### 3. Rate Limiter Decorator

```c
function rateLimit(fn, limit) {

  let count = 0;

  return function(...args) {

    if (count >= limit) {
      throw new Error("Rate limit exceeded");
    }

    count++;

    return fn(...args);
  };
}
```

### Decorator vs Middleware

Decorators:

- wrap functions/classes

Middleware:

- sits in request pipeline

But internally, both often use:

- higher-order functions
- closures
- wrappers

### TypeScript/NestJS Decorator Example

```c
@Get("/users")
@UseGuards(AuthGuard)
@GetUser()
findUsers() {}
```
