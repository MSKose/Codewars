/*
https://www.codewars.com/kata/51e0007c1f9378fa810002a9

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso")  ==>  [8, 64]
*/

// my solution
import java.util.ArrayList;
import java.util.List;

public class DeadFish {
    public static int[] parse(String data) {
        int val = 0;
        List<Integer> res = new ArrayList<>();

        for (char ch : data.toCharArray()) {
            if (ch == 'i') val++;
            else if (ch == 'd') val--;
            else if (ch == 's') val *= val;
            else if (ch == 'o') res.add(val);
        }  
        
        return res.stream().mapToInt(i -> i).toArray();
    }
}