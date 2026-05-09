### Why `async/await` is useful

It makes async code:

- cleaner
- readable
- easier to debug

instead of deeply nested `.then()` chains.

### Real Backend Usage

Used in:

- Express controllers
- MongoDB queries
- Kafka consumers
- payment systems
- REST APIs

Example:

```c
const user = await User.findById(id);
const orders = await Order.find({ userId: id });
```
