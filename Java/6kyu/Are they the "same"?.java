/*
https://www.codewars.com/kata/550498447451fbbd7600041c/

Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
*/

// my solution
import java.util.Arrays;

public class AreSame {
	public static boolean comp(int[] a, int[] b) {
        if (a == null || b == null) return false;
        int[] a2 = Arrays.stream(a).map(c -> c * c).sorted().toArray();
        Arrays.sort(b);
        return Arrays.toString(a2).equals(Arrays.toString(b));
    }
}

//! alternative-solution
import java.util.HashMap;
public class AreSame {
    public static boolean comp(int[] a, int[] b) {
        if (a == null && b == null) return true;
        if (a == null || b == null || a.length != b.length) return false;
        HashMap<Integer, Integer> counter = new HashMap<Integer, Integer>();
        for (int n2 : b) {
            Integer times = counter.get(n2);
            counter.put(n2, times == null ? 1 : times + 1);
        }
        for (int n : a) {
            int n2 = n * n;
            Integer times = counter.get(n2);
            if (times == null) return false;
            if (times == 1) counter.remove(n2);
            else counter.put(n2, times - 1);
        }
        return counter.size() == 0;
    }
}