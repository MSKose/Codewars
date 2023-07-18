/*
https://www.codewars.com/kata/564e7fc20f0b53eb02000106

Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
*/

// my solution
public class Consonants {
    public static int getCount(String str) {
        return str.replaceAll("(?i)[^bcdfghjklmnpqrstvwxyz]", "").length();
    }
}