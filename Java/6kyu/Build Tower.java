/*
https://www.codewars.com/kata/576757b1df89ecf5bd00073b

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

// my solution
public class Kata {
    public static String[] towerBuilder(int nFloors) {
        String[] str = new String[nFloors];

        for (int i = 1; i <= nFloors; i++){
            String ast = "*".repeat(2*i - 1);
            String just = " ".repeat(nFloors - i);
            str[i - 1] = just + ast + just;
        }

        return str;
    }
}