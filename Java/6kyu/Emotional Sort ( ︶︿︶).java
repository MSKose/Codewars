/*
https://www.codewars.com/kata/5a86073fb17101e453000258

Emotional Sort ( ︶︿︶)
You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

:D -> Super Happy
:) -> Happy
:| -> Normal
:( -> Sad
T_T -> Super Sad
Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

Super Happy -> Happy -> Normal -> Sad -> Super Sad
If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

Super Sad -> Sad -> Normal -> Happy -> Super Happy
Example:

arr = [':D', ':|', ':)', ':(', ':D']
sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
More in test cases!

Notes:

The array could be empty, in that case return the same empty array ¯\_( ツ )_/¯
All emotions will be valid
Enjoy! (づ｡◕‿‿◕｡)づ
*/

// my solution
import java.util.HashMap;
import java.util.Map;
import java.util.Arrays;
import java.util.Comparator;

public class Solution {
    private static final Map<String, Integer> EMOTICONS  = new HashMap<String, Integer>() {{
        put(":D", 1);
        put(":)", 2);
        put(":|", 3);
        put(":(", 4);
        put("T_T", 5);
    }};
    public static String[] sortEmotions(boolean order,String[] emotions) {
        if (emotions.length == 0) return emotions;
        if (order) {
            Arrays.sort(emotions, Comparator.comparingInt(a -> EMOTICONS.get(a)));
        } else {
            Arrays.sort(emotions, Comparator.comparingInt(a -> EMOTICONS.get(a)).reversed());
        }

        return emotions;
    }
}