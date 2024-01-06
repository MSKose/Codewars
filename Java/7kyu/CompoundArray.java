/*
https://www.codewars.com/kata/56044de2aa75e28875000017

You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

Input - {1,2,3,4,5,6} and {9,8,7,6} 
Output - {1,9,2,8,3,7,4,6,5,6}
*/

// my solution
public class CompoundArray {    
    public static int[] compoundArray(int[] a, int[] b){
        int[] res = new int[a.length + b.length];
        int max = Math.max(a.length, b.length);
        int indexCount = 0;

        for (int i = 0; i < max; i++) {
            if (i < a.length) res[indexCount++] = a[i];
            if (i < b.length) res[indexCount++] = b[i];
        }

        return res;
    }
}