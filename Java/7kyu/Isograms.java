/*
https://www.codewars.com/kata/54ba84be607a92aa900000f1

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

// my solution
import java.util.HashSet;
import java.util.Set;

public class isogram {
    public static boolean  isIsogram(String str) {
        Set<Character> uniqueCharacters = new HashSet<>();
        
        for (char c: str.toLowerCase().toCharArray()) {
            uniqueCharacters.add(c);
        }

        return uniqueCharacters.size() == str.length(); 
    }
}

//! alternative-solution
public class isogram {
    public static boolean  isIsogram(String str) {
        return str.length() == str.toLowerCase().chars().distinct().count();
    } 
}