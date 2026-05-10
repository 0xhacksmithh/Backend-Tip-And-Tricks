### Why `Promise.all()` here?

If each API takes:

- 2 seconds

Sequential execution:

- 2 + 2 + 2 = 6 seconds

Parallel execution:

- ~2 seconds total

Huge performance improvement.
