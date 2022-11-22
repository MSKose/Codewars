/*
https://www.codewars.com/kata/5b76a34ff71e5de9db0000f2

In this Kata, you will be given a series of times at which an alarm sounds. Your task will be to determine the maximum time interval between alarms. Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.

For example:
solve(["14:51"]) = "23:59". If the alarm sounds now, it will not sound for another 23 hours and 59 minutes.
solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the alarm will not sound is 11 hours and 40 minutes.
In the second example, the alarm sounds 4 times in a day.

More examples in test cases. Good luck!
*/

// my solution
const hourNum = (arr, x) => Number(arr[x][0] + arr[x][1]) * 60;
const minNum = (arr, x) => Number(arr[x][3] + arr[x][4]);

function solve(arr) {
  if (arr.length === 1) return "23:59";
  arr.sort();
  let maxTime = 0;

  for (let i = 1; i < arr.length; i++) {
    let hourDiff = hourNum(arr, i) - hourNum(arr, i - 1);
    let minDiff = minNum(arr, i) - (minNum(arr, i - 1) + 1);
    let minuteCount = hourDiff + minDiff;
    if (minuteCount > maxTime) {
      maxTime = minuteCount;
    }
  }
  let hourDiff = hourNum(arr, arr.length - 1) - hourNum(arr, 0);
  let minDiff = -(minNum(arr, arr.length - 1) + 1 - minNum(arr, 0));
  let minuteCount = 24 * 60 - hourDiff + minDiff;
  if (minuteCount > maxTime) {
    maxTime = minuteCount;
  }

  const format = (x) => (x < 10 ? `0${x}` : x);
  return `${format(~~(maxTime / 60))}:${format(maxTime % 60)}`;
}
