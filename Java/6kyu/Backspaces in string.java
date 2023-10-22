/*
https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

// my solution
public class BackspacesInString {
    public String cleanString(String s) {
        StringBuilder str = new StringBuilder();
        
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '#') {
                if (str.length() > 0) {
                    str.deleteCharAt(str.length() - 1);
                }
            } else {
                str.append(s.charAt(i));
            }
        }
        
        return str.toString();
    }
}