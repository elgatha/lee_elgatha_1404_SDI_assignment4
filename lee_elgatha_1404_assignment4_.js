// JavaScript Document
//Elgatha Lee
//Assignment 4
//SDI 1404



/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */

/* STRINGS

1. Does a string follow a 123-456-7890 pattern like a phone number?
2. Does a string follow an aaa@bbb.ccc pattern like an email address?
3. Is the string a URL? (Does it start with http: or https:?)
4. Title-case a string (split into words, then uppercase the first letter of each word)
5. Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
*/

/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */

//1

var checkPhoneNumber = function (number)   {
	var phoneNumber = number;
	var dash1 = (phoneNumber.substring(3, 4));
	var dash2 = (phoneNumber.substring(7, 8));
	
		if (dash1 == "-" && dash2 == "-") {
			if (phoneNumber.length == 12) {
				return true;
			} else {
				return false;
			}
		}
		else {
			return false;
		}
		
};
var myPhone = checkPhoneNumber("305-713-2938");
console.log(myPhone);

//2

var checkEmail = function (localEmail) {
	var email = localEmail;
	var at = email.indexOf("@")
	var dot = email.lastIndexOf(".");

	if (at == -1 || dot == -1 || (at + 2) >= dot) {
		return false; 
	}else {
		return true;
	}
};
var myEmail = checkEmail("appleelgatha@fullsail.edu");
console.log(myEmail);

//3

var urlHttp = function(input){
	var url = input;
	var checkUrl = "";
	var webArray = [];
	var end = url.substring(0, end +1);

if (checkUrl === webArray[0]){
	return true;
} else if (checkUrl ===webArray[1]){
	return true;
}	else {
	return false;
	}
};

//4

var splitStrUpper = function (str) {
var split = str.split(" ");
var result = "";
for (var i = 0, j = split.length; i < j; i++) {
var spNew = split[i].replace(split[i].charAt(0),(split[i].charAt(0)).toUpperCase());
result = result.concat(spNew + " ");
};
return result;
};

splitStrUpper("apple elgatha");

//5







/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */

/* NUMBER

1. Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
2. Fuzzy-match a number: is the number above or below a number within a certain percent?
3. Find the number of hours or days difference between two dates.
4. Given a string version of a number such as "42", return the value as an actual Number, such as 42.

*/

/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */

//1

parseFloat(Math.round(2.1 * 100) / 100).toFixed(2);

var num1 = "2.1";
document.getElementById('num1').innerHTML = parseFloat(Math.round(num1 * 100) / 100).toFixed(2);


//2

Number.prototype.isFuzzy= function(compare, percent){
    var dev= compare*(percent/100), n= +this;
    return n>= compare-dev && n<= compare+dev;
}

var n = 9;
alert(n.isFuzzy(10, 10)); 


//3

var first = '1/1/2000';
var second = '1/1/2001';

function parseDate(str) {
    var mdy = str.split('/')
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function daydiff(first, second) {
    return (second-first)/(1000*60*60*24)
}

var diff = daydiff(parseDate(first), parseDate(second));

alert(diff);


//4

var x = "42";
var integerForX = parseInt(x);
alert('Number of the string: ' + x + ' is : ' +  integerForX);


/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */

/* ARRAYS 

1. Find the smallest value in an array that is greater than a given number
2. Find the total value of just the numbers in an array, even if some of the items are not numbers.
3. Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
*/

/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */

//1

Array.prototype.minGreaterThan=function(a){
    var t=this,r=Number.POSITIVE_INFINITY,i;
	
    for (i=0;i<t.length;i++) 
        if (a<t[i] && t[i]<r) 
            r=t[i];
	return r;
};

var arr=[1,6,12,14],n=5;
alert(arr.minGreaterThan(n));


//2





//3

