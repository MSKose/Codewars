/*
https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763

Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0
*/

// my solution
public class SequenceSum{
    public static String showSequence(int value){
        if (value < 0) return value + "<0";
        else if (value == 0) return "0=0"; 
        
        StringBuilder str = new StringBuilder();
        
        for (int i = 0; i <= value; i++) {
            if (i != value) {
                str.append(i).append("+");
            } else {
                str.append(i);
            }
        }
        
        return str.toString() + " = " + (value) * (value + 1) / 2;
    }
}