/*
https://www.codewars.com/kata/5bb904724c47249b10000131

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

// my solution
public class TotalPoints {  
    public static int points(String[] games) {
      int finalResX = 0;
      
      for (String score: games) {
        String[] sp = score.split(":");
        char teamAScore = sp[0].charAt(0);
        char teamBScore = sp[1].charAt(0);

        if (teamAScore > teamBScore) {
          finalResX += 3;
        } else if (teamAScore == teamBScore) {
          finalResX++;
        }
      }
      
      return finalResX;
    }
}

//! alternative-solution
import java.util.Arrays;
public class TotalPoints {
  
    public static int points(String[] games) {
       return Arrays.stream(games)
                     .mapToInt(score -> score.charAt(0) - score.charAt(2))
                     .map(match -> match > 0 ? 3 : match == 0 ? 1 : 0)
                     .sum();
    }
}