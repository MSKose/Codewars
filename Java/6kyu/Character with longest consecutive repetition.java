/*
https://www.codewars.com/kata/586d6cefbcc21eed7a001155

For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

Happy coding! :)
*/

// my solution
public class Solution {
    public static Object[] longestRepetition(String s) {
        if (s.isEmpty()) return new Object[]{"", 0};

        int count = 0;
        Object[] res = {"", 0};

        for (int i = 0; i < s.length() - 1; i++) {
            if (s.charAt(i) == s.charAt(i + 1)) {
                count++;
            } else {
                if ((int) res[1] < ++count) {
                    res[0] = Character.toString(s.charAt(i));
                    res[1] = count;
                }
                count = 0;
            }
        }

        if ((int) res[1] < count + 1) {
            res[0] = Character.toString(s.charAt(s.length() - 1));
            res[1] = count + 1;
        }

        return res;
    }
}
