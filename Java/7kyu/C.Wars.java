/*
https://www.codewars.com/kata/55968ab32cf633c3f8000008

Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

Similar to those kinda names we need to initialize the names.

See the pattern below:

initials('code wars') => returns C.Wars 
initials('Barack Hussain obama') => returns B.H.Obama 
Complete the function initials.

Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.
*/

// my solution
import java.util.stream.Collectors;
import java.util.stream.IntStream;

class CWars {
    public static String initials(String name){ 
        String[] arr = name.split(" ");
      
        return IntStream.range(0, arr.length)
                .mapToObj(
                      i -> i == arr.length - 1 
                      ? (arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1))
                      : String.valueOf(Character.toUpperCase(arr[i].charAt(0)))
                )
                .collect(Collectors.joining("."));
    }
}