/*
https://www.codewars.com/kata/61bca0c65a1a39001b1273d4/solutions/javascript

Mike went to buy some Sausage Rolls from the local supermarket, he did not realise that these Sausages Rolls all go out the next day!
Mike must eat as many Sausage Roles as he can before midnight (00:00). Your task is to work out how many Sausage Rolls he is not able to eat.

You will be given 3 inputs:
Bought: The number of Sausage Rolls Mike bought origionally
Time: The current time (Hours : Minutes) as a String
Rate: How many Sausage Rolls per Minute can Mike eat (He's a very good eater)

Example: Bought = 2000, Time = "18:20", Rate: 0.5

There are 5 Hours and 40 Minutes left until 00:00 - This is 340 Minutes
Eating 0.5 Rolls per minute will mean he eats 170 rolls
After this disappointing effort, there are 1830 rolls wasted.

A few things to note:
If he is part way through a roll as the clock strikes midnight, we will count that as wasted as he has not managed to eat the hole thing.
The day starts at 00:01 and ends at 00:00
*/

// my solution
function eatThoseRolls(bought, time, rate) {
  let x = Math.ceil(bought - rate * (60 * (23 - +time.split(":")[0]) + (60 - +time.split(":")[1])));
  return x >= 0 ? x : 0;
}
