/*
https://www.codewars.com/kata/6368426ec94f16a1e7e137fc

You are a security guard at a large company, your job is to look over the cameras. Finding yourself bored you decide to make a game from the people walking in a hallway on one of the cameras. As many people walk past the hallway you decide to figure out the minimum steps it will take before 2 people cross or come into contact with each other (assuming every person takes a step at the same time).

People are represented as arrows, < for a person moving left and > for a person moving right and - for an empty space

A step represents a person moving forward one -, each person moves 1 step at the same time

in this example the first people to come in contact with each other do it after 1 step
---><----
in this example the first people to come in contact with each other do it after 1 step
--->-<------->----<-
in the case that no people come in contact return -1
----<----->----
*/

// my solution
public class Hallway {
    public static int contact(String hallway) {
        int right = -99;
        int left = -99;
        int min = -1;
        
        for (int idx = 0; idx < hallway.length(); idx++) {
            Character el = hallway.charAt(idx);
            if (el == '>') {
                right = idx;
            } else if (el == '<') {
                left = idx;
                if (right != -99 && right < left) {
                    int len = (left - right + 1) / 2;
                    if (min == -1) {
                        min = len;
                    } else {
                        min = Math.min(min, len);
                    }
                }
            }
        }

        return min;
    }
}

//! alternative-solution
import java.util.regex.Pattern;

public class Hallway {
    public static int contact(String hallway) {
        return Pattern.compile(">(-*)<")
                    .matcher(hallway)
                    .results()
                    .mapToInt(m -> m.group(1).length() / 2 + 1)
                    .min()
                    .orElse(-1);
    }
}