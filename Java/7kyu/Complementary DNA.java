/*
https://www.codewars.com/kata/554e4a2f232cdd87d9000038

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

// my solution
public class DnaStrand {
    public static String makeComplement(String dna) {
        StringBuilder str = new StringBuilder();

        for (char c : dna.toCharArray()) {
            if (c == 'A') str.append("T");
            if (c == 'T') str.append("A");
            if (c == 'C') str.append("G");
            if (c == 'G') str.append("C");
        }

        return str.toString();
    }
}

//! alternative-solution
public class DnaStrand {
    public static String makeComplement(String dna) {
      return dna.replaceAll("T","a").replaceAll("A","T").replaceAll("G","c").replaceAll("C","g").toUpperCase();
    }
}
// really clever with the replacing with the lowercase and then converting to uppercase logic.