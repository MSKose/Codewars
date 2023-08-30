/*
https://www.codewars.com/kata/580755730b5a77650500010c

Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'

S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'
*/

// my solution
public class OddEvenSort {
    public static String sortMyString(String s) {
        StringBuilder a = new StringBuilder();
        StringBuilder b = new StringBuilder();
    
        char[] chars = s.toCharArray();
        for (int y = 0; y < chars.length; y++) {
            if (y % 2 == 0) {
                a.append(chars[y]);
            } else {
                b.append(chars[y]);
            }
        }
    
        return a.toString() + " " + b.toString();
    }
}