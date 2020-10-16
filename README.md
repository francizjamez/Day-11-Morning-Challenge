# Day 10 Morning Challenge - 2
**Note** - You will be writing solutions to this exercise in [main.js file](./main.js)

# Exercise - The Humble Sequence of the Modest Numbers
In this challenge, you have to establish if a positive integer is a Modest number, accordingly to the following algorithm:

- Divide the number into two left and right partitions.
- For each combination of left and right parts, you have to check if a condition is true: the remainder of the number divided by the right part is equal to the left part.
- If at least a combination of two parts satisfies the above condition, the number is Modest, otherwise, it's not.

Given an integer num, implement a function that returns true if num is a Modest number, or false if it's not.

### Example

`isModest(2036)` ➞ `true`

#### Combination 1:

- Left = 2 | Right = 036 = 36 (Leading zeros are not considered)
- Number (2036) % Right (36) =  20 != Left (2)

#### Combination 2:

- Left = 20 | Right = 36
- Number (2036) % Right (36) = 20 = Left (20)
- At least a combination satisfies the condition
- **It's a Modest number**