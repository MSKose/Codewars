/*
https://www.codewars.com/kata/51c8991dee245d7ddf00000e/

Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

// my solution
import java.util.Arrays;

public class ReverseWords{
 public static String reverseWords(String str){
    String[] arr = str.split(" ");
    String[] res = new String[arr.length];
   
    for (int i = arr.length - 1; i >= 0; i--) {
      res[i] = arr[arr.length - i - 1];
    }
   
    return String.join(" ", res);
 }
}

// my second solution
import java.util.Arrays;
import java.util.Collections;

public class ReverseWords{
 public static String reverseWords(String str){
    String[] arr = str.split(" ");
    Collections.reverse(Arrays.asList(arr));
    return String.join(" ", arr);
 }
}

//! alternative-solution-1
import java.util.Arrays;

public class ReverseWords{
 public static String reverseWords(String str){
    return Arrays.stream(str.split(" ")).reduce((x, y) -> y+" "+x).get();
 }
}

//! alternative-solution-2
import org.apache.commons.lang3.StringUtils;

public class ReverseWords{
 public static String reverseWords(String str){
   return StringUtils.reverseDelimited(str, ' '); // Use StringUtils to revers based on space character
 }
}