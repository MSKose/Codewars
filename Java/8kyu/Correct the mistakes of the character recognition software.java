/*
https://www.codewars.com/kata/577bd026df78c19bca0002c0

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

// my solution
public class Correct {
    public static String correct(String string) {
      return string.chars()
                  .map(c -> c == 53 ? 83 : c == 48 ? 79 : c == 49 ? 73 : c)
                  .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                  .toString();
    }
}