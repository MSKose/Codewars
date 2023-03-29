/*
https://www.codewars.com/kata/5563b04ab3fd7e500d000151

DESCRIPTION:
This kata is based on the Ruby version of Recursive Averages (http://www.codewars.com/kata/recursive-averages).

Modify the Array class to include an average method. The method give the average value of the items it contains. For example:

[1,2,3].average()  #=> 2
But wait, there's more! If any item in the array is also an array, the method should calculate that average first, like so:

[1,2,[2,4]].average()  #=> 2
The method should first average [2,4] into 3, and then average the resulting [1,2,3] into 2.

One more caveat: the method should attempt to work with non-numbers:

[1,2,'3 doors down'].average()  #=> 2 where "3 doors down" == 3
[0.4, '1.6'].average()  #=> 1 where '1.6' == 1.6
*/

// my solution
Array.prototype.average = function() {
    return this.reduce((x, y) => x + (Array.isArray(y) ? y.average() : parseFloat(y)), 0) / this.length;
}