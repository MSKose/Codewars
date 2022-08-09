/*
https://www.codewars.com/kata/554ca54ffa7d91b236000023/

Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/

// my solution
function deleteNth(arr, n) {
  let dict = {};
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    dict[arr[i].toString()] = ~~dict[arr[i].toString()] + 1; // checking the individual counts for my array elements
    dict[arr[i].toString()] <= n && newArr.push(arr[i]); // making sure the counts does not access n and if so, pushing it to newArr
  }
  return newArr;
}

//! alternative-solution -1
function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

//! alternative-solution-2
const deleteNth = (arr, x) =>
  arr.filter((e, i) => arr.slice(0, i).filter((f) => f == e).length < x);

//! alternative-solution-3
function deleteNth(arr, n) {
  const map = new Map();
  const newArr = [];

  for (el of arr) {
    if (!map.has(el))
      // Add to the map
      map.set(el, 1);
    else if (map.get(el) === n)
      // Skip this element
      continue;
    // Increment this element
    else map.set(el, map.get(el) + 1);

    newArr.push(el);
  }

  return newArr;
}
// see more on new Map() at mdn
