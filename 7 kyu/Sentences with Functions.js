/*
https://www.codewars.com/kata/52567c56cb6ac86b56000516

Implement all required functions in order to create the following sentences by calling those functions:

Adam(has(a(dog()))); // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."
*/

// my solution
function Adam(x) {return x === undefined ? 'Adam.' : 'Adam ' + x}
function has(x) {return x === undefined ? 'has.' : 'has ' + x}
function a(x) {return x === undefined ? 'a.' : 'a ' + x}
function dog(x) {return x === undefined ? 'dog.' : 'dog ' + x}
function The(x) {return x === undefined ? 'The.' : 'The ' + x}
function name(x) {return x === undefined ? 'name.' : 'name ' + x}
function of(x) {return x === undefined ? 'of.' : 'of ' + x}
function the(x) {return x === undefined ? 'the.' : 'the ' + x}
function is(x) {return x === undefined ? 'is.' : 'is ' + x}
function also(x) {return x === undefined ? 'also.' : 'also ' + x}