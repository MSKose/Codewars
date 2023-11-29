/*
https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

// my solution
public class Multiplication{
    public static int [][] multiplicationTable(int n){
        int[][] arr = new int[n][n];
    
        for (int i = 1; i <= n; i++) {
            for (int k = 1; k <= n; k++) {
                arr[i - 1][k - 1] = k * i;
            }
        }
        
        return arr;
    }
}