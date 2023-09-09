/*
https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

// my solution
public class Solution {
    public static boolean validatePin(String pin) {
        Boolean lenCheck = pin.length() == 4 || pin.length() == 6;
        Boolean digitCheck = pin.replaceAll("[0-9]", "").length() == 0;
        return lenCheck && digitCheck;
    }
}

//! alternative-solution
public class Solution {
    public static boolean validatePin(String pin) {
        return pin.matches("[0-9]{4}|[0-9]{6}");
    }
}