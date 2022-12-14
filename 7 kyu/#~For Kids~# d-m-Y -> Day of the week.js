/*
https://www.codewars.com/kata/5885b5d2b632089dc30000cc

#~For Kids Challenges~#
Your task is easy, write a function that takes an date in format d/m/Y(String) and return what day of the week it was(String).
Example: "21/01/2017" -> "Saturday", "31/03/2017" -> "Friday"
Have fun!
*/

// my solution
function dayOfTheWeek(date) {
  date = date.split("/").reverse().join("-");
  const newDate = new Date(date);
  const day = newDate.toLocaleString("en-GB", { weekday: "long" });
  return day;
}