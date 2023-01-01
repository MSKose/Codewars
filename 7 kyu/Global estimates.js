/*
https://www.codewars.com/kata/59aa2cccd0a5ffdfa000005b

Lately, feature requests have been piling up and you need a way to make global estimates of the time it would take to implement them all. If you estimate feature A to take 4 to 6 hours to implement, and feature B to take 2 to 5 hours, then in the best case it will only take you 6 (4 + 2) hours to implement both features, and in the worst case it will take you 11 (6 + 5). In the average case, it will take you 8.5 hours.

To help you streamline the estimation process, write a function that returns a tuple (JS: array) of the global best case, average case and worst case given a tuple of tuples (JS: array of arrays) representing best case and worst case guesses.

For example,

estimates = ((1, 2), (3, 4))
global_estimate(estimates) == (4, 5, 6)
For example,

estimates = [[1, 2], [3, 4]]
globalEstimate(estimates) == [4, 5, 6]
Don't worry about rounding or invalid input.
*/

// my solution
function globalEstimate(estimates){
    const minimum = [...estimates].reduce((x, y) => x + y[0], 0);
    const maximum = [...estimates].reduce((x, y) => x + y[1], 0);
    const average = (maximum + minimum) / 2;
    return [minimum, average, maximum];
}