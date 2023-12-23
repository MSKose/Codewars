/*
https://www.codewars.com/kata/5939ab6eed348a945f0007b2

When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:

'red white blue' //returns string value of white

'red blue gold' //returns gold
*/

// my solution
public class Kata {
    public static String longestWord(String wordString) {
        String[] arr = wordString.split(" ");
        int maxLen = 0;
        String res = "";
        
        for (int i = 0; i < arr.length; i++) {
            String st = arr[i];
            if (maxLen <= st.length()) {
                maxLen = st.length();
                res = st;
            }
        }
        
        return res;
    }
}