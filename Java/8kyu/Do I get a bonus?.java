/*
https://www.codewars.com/kata/56f6ad906b88de513f000d96

It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
*/

// my solution
public class Kata{
    public static String bonusTime(final int salary, final boolean bonus) {
      return bonus ? "£" + Integer.toString(salary * 10) : "£" + salary;
    }
}