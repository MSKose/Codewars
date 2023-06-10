/*
https://www.codewars.com/kata/5a00e05cc374cb34d100000d

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

// my solution
import java.util.stream.IntStream;

public class Sequence{
  public static int[] reverse(int n){
    return IntStream
            .rangeClosed(1, n)
            .map(i -> n - i + 1)
            .toArray();
  }
}

//! alternative-solution-1
import java.util.stream.IntStream;

public class Sequence{
  public static int[] reverse(int n){ 
    return IntStream.range(-n, 0).map(Math::abs).toArray();
  }
}

//! alternative-solution-2
import java.util.stream.IntStream;

public class Sequence{
  public static int[] reverse(int n){
    return IntStream.iterate(n, i -> i - 1).limit(n).toArray();
  }
}