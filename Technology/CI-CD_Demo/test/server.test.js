import test from "node:test";
import assert from "node:assert";

import { add, multiply } from "../src/server.js";

test("add should return sum of two numbers", () => {
  const result = add(2, 3);
  assert.strictEqual(result, 5);
});

test("multiply should return product of two numbers", () => {
  const result = multiply(4, 5);
  assert.strictEqual(result, 20);
});
