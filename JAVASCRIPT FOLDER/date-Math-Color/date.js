// standard call for the date
let d=new Date();
console.log(d);
document.write(d +" "+"simple date");
document.write("<br>");


// using the milliseconds ,mena sit will show the miliseconds in the page
let d_mil=new Date(1562139219000);
document.write(d_mil);
document.write("<br>");




// using the year and month and day,style

let d_norm=new Date(2019, 0, 23)  /*the result in the page is ---> jan 23 2019    we use 0 because the index of the monthes in JS is 0 for the first month*/
document.write(d_norm);
document.write("<br>");

// ////////////////////////////////////////////////////////////////////
// <!-- current date and time in your local time zone -->
let d = new Date(); 
document.write(d);
document.write("<br>");
//using milliseconds
let d_mil = new Date(0);
document.write(d_mil);
document.write("<br>");
d_mil = new Date(100000000);
document.write(d_mil);
document.write("<br>");
// current epoch
d_mil = new Date(1562139052000);
document.write(d_mil);
document.write("<br>");
// using year, month and so on
// pay attention that month counts from 0 to 11 (!)
let d_norm = new Date(2019, 0, 23) // Jan 23 2019
document.write(d_norm);
document.write("<br>");
d_norm = new Date(2019, 0, 23, 11, 20, 23) // Jan 23 2019
document.write(d_norm);
document.write("<br>");