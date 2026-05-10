## Difference Between Spread and Rest

| Feature | Spread Operator               | Rest Operator       |
| ------- | ----------------------------- | ------------------- |
| Purpose | Expands values                | Collects values     |
| Usage   | Arrays/Objects/Function Calls | Function Parameters |
| Syntax  | `...array`                    | `...args`           |

## Spread Operator Examples

### Merge Arrays

```c
const arr = [...arr1, ...arr2];
```

### Clone Object

```c
const copy = { ...user };
```

### Pass Array into Function

```c
sum(...numbers);
```

## Rest Operator Examples

### Variable Arguments

```c
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
```

## Real Backend Use Cases

### 1. API Response Formatting

```c
const response = {
  ...user,
  token
};
```

### 2. MongoDB Update

```c
const updatedData = {
  ...req.body,
  updatedAt: new Date()
};
```

### 3. Express Middleware

```c
function logger(...messages) {
  console.log(messages);
}
```
