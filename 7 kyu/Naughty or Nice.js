/*
https://www.codewars.com/kata/5662b14e0a1fb8320a00005c

Santa is coming to town and he needs your help finding out who's been naughty or nice. You will be given an entire year of JSON data following this format:

{
    January: {
        '1': 'Naughty','2': 'Naughty', ..., '31': 'Nice'
    },
    February: {
        '1': 'Nice','2': 'Naughty', ..., '28': 'Nice'
    },
    ...
    December: {
        '1': 'Nice','2': 'Nice', ..., '31': 'Naughty'
    }
}
Your function should return "Naughty!" or "Nice!" depending on the total number of occurrences in a given year (whichever one is greater). If both are equal, return "Nice!"
*/

// my solution
function naughtyOrNice(data) {
    let sum = 0;
    
    for (const [month, days] of Object.entries(data)) {
        for (const [key, value] of Object.entries(days)) {
            sum += value === 'Naughty' ? 1 : -1;
        }
    }
    
    return sum > 0 ? 'Naughty!' : 'Nice!';
}