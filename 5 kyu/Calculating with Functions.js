/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())) # must return 35
four(plus(nine())) # must return 13
eight(minus(three())) # must return 5
six(divided_by(two())) # must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, divided_by
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(divided_by(three()))
*/

// my solution
function zero(arg=null) {return arg ? arg(0) : 0}
function one(arg=null) {return arg ? arg(1) : 1}
function two(arg=null) {return arg ? arg(2) : 2}
function three(arg=null) {return arg ? arg(3) : 3}
function four(arg=null) {return arg ? arg(4) : 4}
function five(arg=null) {return arg ? arg(5) : 5}
function six(arg=null) {return arg ? arg(6) : 6}
function seven(arg=null) {return arg ? arg(7) : 7}
function eight(arg=null) {return arg ? arg(8) : 8}
function nine(arg=null) {return arg ? arg(9) : 9}

function plus(right) {return left => left + right}
function minus(right) {return left => left - right}
function times(right) {return left => left * right}
function dividedBy(right) {return left => ~~(left / right)}