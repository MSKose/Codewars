/*
https://www.codewars.com/kata/517abf86da9663f1d2000003/

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

// my solution
function toCamelCase(str){
    if (str.includes('-')) {
      if (str[0] == str[0].toLowerCase()){
        let c = str.split("-").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('')
        return c.charAt(0).toLowerCase() + c.slice(1)
      }else {
        return str.split("-").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('')
      }
    } else if (str.includes('_')) {
      if (str[0] == str[0].toLowerCase()){
        let c = str.split("_").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('')
        return c.charAt(0).toLowerCase() + c.slice(1)
      }else {
        return str.split("_").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('')
      }
    }else {
      return ''
    }
}


//! alternative-solution-1
function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}
// ngl, replace came to mind initially but didn't touch it cuz of regExp
// but looking at this, I could have done this too smh

//! alternative-solution-2
const toCamelCase = (str) => {
    let arr = [];
    !str || str === "" ? str : arr = str.split(str.includes("-") ? "-" : "_");
    return arr.map((elem,i) => i === 0 ? elem : elem.slice(0,1).toUpperCase() + elem.slice(1)).join("");
}
// this is pure art really. Didn't you could play with the split method's inside that way

//! alternative-solution-3
function toCamelCase(str){
    const arr = str.split('')
    for (let i = 0; i < arr.length; i++){
      if(arr[i] === "-" || arr[i] === "_"){
        arr[i + 1] = arr[i + 1].toString().toUpperCase()
        arr.splice(i, 1)
      }
    }
    return arr.join('')
}
// this one's clever too

