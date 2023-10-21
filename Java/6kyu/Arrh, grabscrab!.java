/*
https://www.codewars.com/kata/52b305bec65ea40fe90007a7

Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

For example:

grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
Should return ["sport", "ports"].

Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

Good luck!
*/

// my solution
import java.util.List;
import java.util.Arrays;

public class Grab {
    public static List<String> grabscrab(String s, List<String> words){
        String sortedStr = stringSorter(s);
        words.removeIf(x -> !stringSorter(x).equals(sortedStr));
        return words;
    }
    
    public static String stringSorter (String str) {
        char[] chars = str.toCharArray();
        Arrays.sort(chars);
        return new String(chars);
    }
}