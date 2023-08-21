/*
https://www.codewars.com/kata/59c5f4e9d751df43cf000035/

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
*/

// my solution
class Solution{
    public static int solve(String s){
        int cur = 0;
        int max = 0;
        
        for (char c: s.toCharArray()) {
            if ("aeiou".contains(Character.toString(c))) {
            cur++;
            max = Math.max(max, cur);
            } else {
            cur = 0;
            }
        }
        
        return max;
    }
}