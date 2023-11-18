/*
https://www.codewars.com/kata/5503013e34137eeeaa001648

Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

// my solution
class Diamond {
    public static String print(int n) {
        if (n <= 0 || n % 2 == 0) return null;
        if (n == 1) return "*\n";
        
        StringBuilder str = new StringBuilder();
        int empty = (n - (n + 1) / 2);
        for (int i = 0; i < n; i++) {
            str.append(" ".repeat(Math.abs(empty - i)) + "*".repeat(n - 2 * Math.abs(empty - i)) + "\n");
        }
        
        return str.toString();
    }
}