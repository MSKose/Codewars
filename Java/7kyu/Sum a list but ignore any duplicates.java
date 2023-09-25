/*
https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2

Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

// my solution
import java.util.*;


public class Solution{
    public static int sumNoDuplicates(int[] arr){
        int sum = 0;
        
        for (int i : arr) {
            if (Arrays.stream(arr).filter(c -> c == i).count() == 1)
            sum += i;
        }
        
        return sum;
    }
}

//! alternative-solution
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Solution{
    public static int sumNoDuplicates(int[] arr){
        Set<Integer> setOfDuplicates = new HashSet<>();
        Set<Integer> setOfUniques = new HashSet<>();
            
        for (int i : arr){
                if (!setOfUniques.add(i)){
                    setOfDuplicates.add(i);
                }
        }
            
        return Arrays.stream(arr).filter(i -> !setOfDuplicates.contains(i)).sum();
    }
}