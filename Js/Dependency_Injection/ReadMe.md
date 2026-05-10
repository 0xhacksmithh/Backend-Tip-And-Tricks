## What is Dependency Injection?

Dependency Injection means:

- Instead of creating dependencies inside a class/function, we pass them from outside.

This makes code:

- loosely coupled
- testable
- maintainable

### Without Dependency Injection (Bad)

```c
class UserService {

  constructor() {
    this.emailService = new EmailService();
  }

}
```

Problem:

- tightly coupled
- hard to test
- hard to replace services

### With Dependency Injection

```c
class UserService {

  constructor(notificationService) {
    this.notificationService = notificationService;
  }

}
```

Now we can inject:

- Email service
- SMS service
- Push notification service

without changing `UserService`.

## Real Backend Use Cases

### 1. Database Injection

```c
const userService =
  new UserService(postgresDB);
```

Switch later:

```c
const userService =
  new UserService(mongoDB);
```

### 2. Logger Injection

```c
new OrderService(winstonLogger);
```

### 3. Cache Injection

```c
new ProductService(redisCache);
```

## Testing becomes easy

Mock service injection:

```c
class MockNotificationService {

  send(message) {
    console.log("Mock Send:", message);
  }

}
```

Used heavily in unit testing.
