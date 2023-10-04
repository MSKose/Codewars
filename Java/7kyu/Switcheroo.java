/*
https://www.codewars.com/kata/57f759bb664021a30300007d

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

// my solution
import java.util.Arrays;
import java.util.stream.Collectors;

public class Switch {
    public static String switcheroo(String x) {
        return Arrays.stream(x.split(""))
                    .map(j -> j.charAt(0) == 'a' ? 'b' : j.charAt(0) == 'b' ? 'a' : 'c')
                    .map(c -> String.valueOf(c))
                    .collect(Collectors.joining());
    }
}