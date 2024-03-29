/*
https://www.codewars.com/kata/6071ef9cbe6ec400228d9531

You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division
Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""
*/

// my solution
class Solution {
    public static String calc(String txt){
        String[] arr = txt.split(" ");
        int x = arr[0].length();
        int y = arr[2].length();
        String op = arr[1];
        
        if (op.equals("//")) return ".".repeat(Math.floorDiv(x, y));
        else if (op.equals("*")) return ".".repeat(x * y);
        else if (op.equals("+")) return ".".repeat(x + y);
        return ".".repeat(x - y);
    }
}