/*
https://www.codewars.com/kata/5208f99aee097e6552000148/

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

// my solution:
class Solution {
    public static String camelCase(String input) {
        StringBuilder str = new StringBuilder();

        for (int i = 0; i < input.length(); i++) {
            Character ch = input.charAt(i);
            if (91 > ch && ch > 64) {
                str.append(" " + ch);
            } else {
                str.append(ch);
            }
        }

        return str.toString();
    }
}

//! alternative-solution
class Solution {
    public static String camelCase(String input) {
        return input.replaceAll("([A-Z])", " $1");
    }
}