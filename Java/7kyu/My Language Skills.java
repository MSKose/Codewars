/*
https://www.codewars.com/kata/5b16490986b6d336c900007d/

You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/

// my solution
package com.codewars.anter69;

import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class MyLanguages {
    public static List<String> myLanguages(final Map<String, Integer> results) {
        List<String> languages = new ArrayList<>(results.keySet());
        languages.removeIf(r -> results.get(r) <= 59);
        Collections.sort(languages, Comparator.comparingInt(results::get).reversed());
        return languages;
    }
}

//! alternative-solution
package com.codewars.anter69;

import java.util.List;
import java.util.Map;

interface MyLanguages {
    static List<String> myLanguages(Map<String, Integer> results) {
        return results.keySet().stream()
            .filter(l -> results.get(l) > 59)
            .sorted((a, b) -> results.get(b) - results.get(a))
            .toList();
    }
}