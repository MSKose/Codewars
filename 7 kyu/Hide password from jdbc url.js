/*
https://www.codewars.com/kata/5a726f16373c2ee6c60000db

We have to create a function that receives a connection string with password included and you have to mask the password i.e. change password by asterisks.

Preconditions:

non empty valid url
password always next to string section password=
assume password will not contain ampersand sign for sake of simplicity
to make it more real it has non ASCII characters
"password=" and "user" will occur only once
empty passwords are not validated but best solutions take empty passwords into account

Example:

input
jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345

output
jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=*****

Extra readings:

https://alvinalexander.com/java/jdbc-connection-string-mysql-postgresql-sqlserver
*/


// my solution
function hidePasswordFromConnection(urlString){
    const passwordLength = 9;
    const idx = urlString.indexOf("password=") + passwordLength;
    
    
    if (urlString.indexOf("password") > urlString.indexOf("user")) {
      const asterisksCount = urlString.length - idx;
      return urlString.substring(0, idx) + '*'.repeat(asterisksCount);  
    }
    
    const asterisksCount = urlString.indexOf("&user") - idx
    return urlString.substring(0, idx) + '*'.repeat(asterisksCount) + urlString.substring(urlString.indexOf("&user"));  
}

//! alternative-solution-1
hidePasswordFromConnection = (s) =>
  s.replace(/(password=)([^&]+)/, (_,a,b)=>a+b.replace(/./g,'*'))

//! alternative-solution-2
function hidePasswordFromConnection(urlString) {
    return urlString.replace(/password=([^&]*)/, (_, p) => `password=${'*'.repeat(p.length)}`);
}

//! alternative-solution-3
function hidePasswordFromConnection(urlString){
    return urlString.replace(/(password=)([^&]+)(&.+)*/, (_,g1,g2,g3='') => g1+g2.replace(/./g,'*')+g3);
}