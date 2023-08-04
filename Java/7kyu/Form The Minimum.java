/*
https://www.codewars.com/kata/5ac6932b2f317b96980000ca

Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications
*/

// my solution
import java.util.HashSet;
import java.util.Set;
import java.util.List;
import java.util.stream.Collectors;


public class Minimum{
	public static int minValue(int[] values){
        Set<Integer> uniqueValues = new HashSet<>();   
    
        for (int c: values) {
            uniqueValues.add(c);
        }
        
        List<Integer> sortedValues = uniqueValues.stream().sorted().collect(Collectors.toList());
        
        StringBuilder str = new StringBuilder();
        
        for (int val : sortedValues) {
        str.append(val);
        }

        return Integer.parseInt(str.toString());
	}
}

//! alternative-solution-1
import java.util.stream.Collectors;
import java.util.*;

public class Minimum{
	public static int minValue(int[] values){
		String s = Arrays.stream(values)
                .sorted()
                .distinct()
                .mapToObj(Integer::toString)
                .collect(Collectors.joining(""));
        return Integer.valueOf(s);
	}
}

//! alternative-solution-2
import java.util.Arrays;

public class Minimum{
	public static int minValue(int[] values) {
		return Arrays.stream(values)
                        .distinct()
                        .sorted()
                        .reduce(0, (a, b) -> 10 * a + b);
	}
}