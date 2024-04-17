import { expect, test } from "vitest";
import { factory } from "./factory";

test("creates a count function", function () {
  const count: () => number = factory(1, 1);
  expect(count()).toBe(2);
  expect(count()).toBe(3);
});

test("creates a count starting from 10 with a step of 5", function () {
  const count: () => number = factory(10, 5);
  expect(count()).toBe(15);
  expect(count()).toBe(20);
});

test("defaults to start 0, step 1 when no arguments passed", function () {
  const count: () => number = factory();
  expect(count()).toBe(1);
  expect(count()).toBe(2);
});

test("handles negative test value", function () {
  const count: () => number = factory(-5, -2);
  expect(count()).toBe(-7);
  expect(count()).toBe(-9);
});

test("handles floating test value", function () {
  const count: () => number = factory(0.5, 0.5);
  expect(count()).toBe(1);
  expect(count()).toBe(1.5);
});

test("handles decrement count test value", function () {
  const count: () => number = factory(20, -5);
  expect(count()).toBe(15);
  expect(count()).toBe(10);
});

test("handlest increment count test value with negative start", function () {
  const count: () => number = factory(-5, 5);
  expect(count()).toBe(0);
  expect(count()).toBe(5);
});

test("handlest large step value", function () {
  const count: () => number = factory(0, 1000);
  expect(count()).toBe(1000);
  expect(count()).toBe(2000);
});
