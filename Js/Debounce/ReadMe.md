### How it works

Every keystroke:

- clears previous timer
- starts new timer
- if user stops typing for 1 second:
  - API call executes

### Core Debounce Logic

```c
clearTimeout(timer);

timer = setTimeout(() => {
  fn();
}, delay);
```

## Real Backend / Frontend Use Cases

### 1. Search Suggestions

```c
debounce(searchUsers, 500);
```

### 2. Resize Optimization

```c
window.addEventListener(
  "resize",
  debounce(updateLayout, 300)
);
```

### 3. API Rate Reduction

**Without debounce:**

- too many API calls
- server overload
- poor performance

**With debounce:**

- optimized traffic
- better UX

### Debounce vs Throttle

| Feature   | Debounce         | Throttle           |
| --------- | ---------------- | ------------------ |
| Executes  | After delay ends | At fixed intervals |
| Best For  | Search input     | Scroll/resize      |
| API Calls | Minimal          | Controlled         |

## Async API Example

```c
async function searchUsers(query) {

  const res = await fetch(
    `/users?q=${query}`
  );

  const data = await res.json();

  console.log(data);
}
```
