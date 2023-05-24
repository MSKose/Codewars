/*
https://www.codewars.com/kata/55f73be6e12baaa5900000d4/

Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
*/

// my solution
public class Goals {
    public static int goals(int laLigaGoals, int copaDelReyGoals, int championsLeagueGoals) {
        return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    }
}

//! alternative-solution
import java.util.Arrays;
public class Goals {
    public static int goals(int...array) {
        return Arrays.stream(array).sum();
    }
}