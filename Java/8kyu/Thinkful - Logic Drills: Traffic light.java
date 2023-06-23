/*
https://www.codewars.com/kata/58649884a1659ed6cb000072

You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/

// my solution
public class TrafficLights {
    public static String updateLight(String current) {
        return current == "green" ? "yellow" : current == "yellow" ? "red" : "green";
    }
}

//! alternative-solution
import com.google.common.collect.ImmutableMap;
import java.util.Map;

public class TrafficLights {
    private static final Map<String, String> LIGHTS = ImmutableMap.of(
            "red", "green",
            "green", "yellow",
            "yellow", "red"
    );

  public static String updateLight(String current) {
    return LIGHTS.get(current);
  }
}