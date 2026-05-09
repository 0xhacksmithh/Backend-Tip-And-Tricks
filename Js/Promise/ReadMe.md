### Why Promises are useful

Promises help handle:

- `async` operations
- API requests
- DB queries
- timers
- background jobs

without callback hell.

## Real Backend Examples

### Database Query

```c
function getUser(id) {
  return new Promise((resolve, reject) => {

    const user = { id: 1, name: "Satyabrata" };

    if (user) {
      resolve(user);
    } else {
      reject("User not found");
    }

  });
}
```

### API Call

```c
fetch("https://api.example.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```
