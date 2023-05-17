/*
https://www.codewars.com/kata/57faf7275c991027af000679

Description:
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
*/

// my solution
public class Kata {
    public static String remove(String s, int n){
      int len = s.length();
      for (int i = 0; n-- != 0 && i < len; i++) {
          s = s.replaceFirst("!", "");
      }
      return s;
    }
}

//! alternative-solution
public class Kata {
    public static String remove(String s, int n) {
      return String.join("", s.split("!", n + 1));
    }
}