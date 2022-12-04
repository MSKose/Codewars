/*
https://www.codewars.com/kata/539de388a540db7fec000642

Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  == True
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  == False
*/

// my solution
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    const MONTH = ["January","February","March","April","May","June","July", "August","September","October","November","December"]
    const [currMonth, currDay, currYear] = currentDate.split(' ');  
    const [expMonth, expDay, expYear] = expirationDate.split(' ');  
    
    const currDate = new Date(+currYear, MONTH.indexOf(currMonth), +currDay.slice(0, -1)).getTime();
    const expDate = new Date(+expYear, MONTH.indexOf(expMonth), +expDay.slice(0, -1)).getTime();
    
    return enteredCode === correctCode && currDate <= expDate;
}

//! alternative-solution-1
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}
// Actually Date.parse is heavily discouraged because of browser differences and inconsistencies.
// check the Note here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Examples

//! alternative-solution-2
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
}