# MongoDB $inc Operator Unexpected Increment

This repository demonstrates a common error when using the `$inc` operator in MongoDB. The `$inc` operator is intended to increment a numeric field, but using a negative value may lead to unexpected behavior.  This example shows how to avoid this issue and ensure correct counter management.

## Bug
The `bug.js` file demonstrates how incorrectly using a negative value with the `$inc` operator will not decrement, but increment the counter.

## Solution
The `bugSolution.js` file demonstrates how to properly decrement a counter by using a positive value with the `$inc` operator, in conjunction with the `$setOnInsert` to handle counter creation if it doesn't exist. 