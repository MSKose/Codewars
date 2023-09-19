/*
https://www.codewars.com/kata/5ba38ba180824a86850000f7

Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]
*/

// my solution
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

class Solution{
    public static int[] solve(int[] arr){
        Integer[] arrInteger = Arrays.stream(arr).boxed().toArray(Integer[]::new);
        List<Integer> list = Arrays.asList(arrInteger);
        List<Integer> res = new ArrayList<>();
        
        for (int i = 0; i < arr.length; i++) {
            if (i == list.lastIndexOf(arr[i])) {
                res.add(arr[i]);
            }
        }

        int[] result = new int[res.size()];
        for (int i = 0; i < res.size(); i++) {
            result[i] = res.get(i);
        }

        return result;
    }
}