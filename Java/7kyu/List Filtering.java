/*
https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

// my solution
import java.util.List;
import java.util.stream.Collectors;

public class Kata {
    public static List<Object> filterList(final List<Object> list) {
        return list.stream()
                    .filter(x -> x instanceof Number)
                    .collect(Collectors.toList());
    }
}

//! alternative-solution
import java.util.List;

interface Kata {
    static List<Object> filterList(List<Object> list) {
        return list.stream().filter(Integer.class::isInstance).toList();
    }
}