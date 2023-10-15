/* 
Is it possible to write a book without the letter 'e' ?

Task
Given String str, return:

How many "e" does it contain (case-insensitive) in string format.
If given String doesn't contain any "e", return: "There is no "e"."
If given String is empty, return empty String.
If given String is `null`/`None`/`nil`, return `null`/`None`/`nil`
*/

// my solution
public class WithoutLetterE {
    public static String findE(String str){
        if (str == null) return null;
        else if (str.length() == 0) return "";
        long res = str.toLowerCase().chars().filter(c -> c == 'e').count();
        return res == 0 ? "There is no \"e\"." : ""+res;
    }
}