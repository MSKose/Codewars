/*
https://www.codewars.com/kata/583f158ea20cfcbeb400000a

Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Try to do it without using if statements!
*/

// my solution
import java.util.HashMap;
import java.util.Map;
import java.util.function.BiFunction;

class ArithmeticFunction {
    public static int arithmetic(int a, int b, String operator) {
        Map<String, BiFunction<Integer, Integer, Integer>> op = new HashMap<>();
        op.put("add", (x, y) -> x + y);
        op.put("subtract", (x, y) -> x - y);
        op.put("divide", (x, y) -> x / y);
        op.put("multiply", (x, y) -> x * y);
        return op.get(operator).apply(a, b);
    }
}