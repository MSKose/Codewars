/*
https://www.codewars.com/kata/54edbc7200b811e956000556/

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.
*/

// my solution
import java.util.Arrays;

public class Counter {
  public int countSheeps(Boolean[] arrayOfSheeps) {
    return (int) Arrays.stream(arrayOfSheeps).filter(x -> x != null && x).count();
  }
}