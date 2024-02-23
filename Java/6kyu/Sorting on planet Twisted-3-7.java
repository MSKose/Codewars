/*
https://www.codewars.com/kata/58068479c27998b11900056e

#Sorting on planet Twisted-3-7

There is a planet... in a galaxy far far away. It is exactly like our planet, but it has one difference: #The values of the digits 3 and 7 are twisted. Our 3 means 7 on the planet Twisted-3-7. And 7 means 3.

Your task is to create a method, that can sort an array the way it would be sorted on Twisted-3-7.

7 Examples from a friend from Twisted-3-7:

[1,2,3,4,5,6,7,8,9] -> [1,2,7,4,5,6,3,8,9]
[12,13,14] -> [12,14,13]
[9,2,4,7,3] -> [2,7,4,3,9]
There is no need for a precheck. The array will always be not null and will always contain at least one number.

You should not modify the input array!

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

// my solution
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class Kata {
    public static int transformDigit(int d) {
        int transformed = Integer.parseInt(Integer.toString(Math.abs(d)).replace('3', 'x').replace('7', '3').replace('x', '7'));
        return d < 0 ? -transformed : transformed;
    }
    public static Integer[] sortTwisted37(Integer[] arr) {
        Integer[] boxedArr = Arrays.stream(arr).toArray(Integer[]::new);
        Arrays.sort(boxedArr, Comparator.comparingInt(Kata::transformDigit));
        List<Integer> resultList = Arrays.asList(boxedArr);
        return resultList.toArray(new Integer[resultList.size()]);
    }
}