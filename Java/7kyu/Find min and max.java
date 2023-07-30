/*
https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130

Implement a function that returns the minimal and the maximal value of a list (in this order).
*/

// my solution
import java.util.List;
import java.util.Collections;

class MinMax {
    static int[] getMinMax(List<Integer> list) {
        int min = Collections.min(list);
        int max = Collections.max(list);
        return new int[] {min, max};
    }
}


//! alternative-solution
import java.util.List;

class MinMax {
    static int[] getMinMax(List<Integer> list) {
        final var stats = list.stream()
                .mapToInt(i -> i)
                .summaryStatistics();
        
        return new int[]{stats.getMin(), stats.getMax()};
    }
}