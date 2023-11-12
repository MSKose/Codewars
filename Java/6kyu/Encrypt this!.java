/*
https://www.codewars.com/kata/5848565e273af816fb000449

Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encrypt_this("Hello") == "72olle"
encrypt_this("good") == "103doo"
encrypt_this("hello world") == "104olle 119drlo"
*/

// my solution
import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class Kata {
    public static String encryptThis(String text) {
        return Arrays.stream(text.split(" "))
                    .map(st -> Pattern
                        .compile("(^\\w)")
                        .matcher(st.replaceAll("(^\\w)(\\w)(\\w*)(\\w$)", "$1$4$3$2"))
                        .replaceAll(r -> Integer.toString(r.group(1).charAt(0)))
                    )
                    .collect(Collectors.joining(" "));
    }
}