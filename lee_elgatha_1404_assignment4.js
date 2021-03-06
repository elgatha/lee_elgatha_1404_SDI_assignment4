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
5. Given a string that is a list of things separated by a given string, as well as another string separator, 
   return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
*/

/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */

//1
	// Checks for a valid phone number
	// Returns boolean for extra credit
var checkPhoneNumber = function (number)   {
	var phoneNumber = number;
	var dash1 = (phoneNumber.substring(3, 4));
	var dash2 = (phoneNumber.substring(7, 8));
	
		if (dash1 == "-" && dash2 == "-") {
			if (phoneNumber.length == 12) {
				return (phoneNumber + " is a valid phone number"); 
			} else {
				return (phoneNumber + " is not a valid phone number"); 
			}
		}
		else {
			return (phoneNumber + " is not a valid phone number"); 
		}
		
};

var myPhone = checkPhoneNumber("305-713-2938");
	console.log(myPhone);

//2
	// Checks for a valid email address
	// Returns boolean for extra credit
var checkEmail = function (localEmail) {
	var email = localEmail;
	var at = email.indexOf("@");
	var dot = email.lastIndexOf(".");

	if (at == -1 || dot == -1 || (at + 2) >= dot) {
		return false (email + " is not a valid email address"); 
	}else {
		return (email + " is a valid email address");
	}
};
var myEmail = checkEmail("appleelgatha@fullsail.edu");
console.log(myEmail);

//3
	// Checks for a valid URL
	// Returns boolean for extra credit
var urlHttp = function (string) {
	var url = string,
		check = "",
		checkArray = [],
		end = url.indexOf(":");

	checkArray[0] = "http:";
	checkArray[1] = "https:";

	check = url.substring(0, end + 1);

	if (check === checkArray[0]) {
		return (url + " is a valid URL.");
	}
	else if (check === checkArray[1]) {
		return (url + " is a valid URL.");
	}
	else {
		return (url + " is not a valid URL.");
	}
};
var theUrl = urlHttp("http://www.goodfoodislife.com");
console.log(theUrl);


//4
	// Capitalize the first character of each word in a string
	// Returns modified string with the first letter capitalized in each word

var splitStrUpper = function (str) {
var split = str.split(" ");
var result = "";
for (var i = 0, j = split.length; i < j; i++) {
var spNew = split[i].replace(split[i].charAt(0),(split[i].charAt(0)).toUpperCase());
result = result.concat(spNew + " ");
}
return result;
};

var capital = splitStrUpper("apple elgatha");
console.log(capital);


//5
	// Changes and  separates function


var alpha = "a,b,c"
console.log(alpha);

var replaceCommas = function (i) {
var myString = i;
    alpha = i.replace(",", "/");
    alpha = alpha.replace(",", "/");

console.log(alpha);
};
var removeCommas = replaceCommas("a,b,c");


/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */

/* NUMBER

1. Format a number to usevar removeCommas = function (i) {
var myString = i;
    carr = i.replace(",", "/");
    darr = carr.replace(",", "/");

console.log(darr);
};
var rCommas = removeCommas("a,b,z");
 a specific number of decimal places, as for money: 2.1 → 2.10
2. Fuzzy-match a number: is the number above or below a number within a certain percent?
3. Find the number of hours or days difference between two dates.
4. Given a string version of a number such as "42", return the value as an actual Number, such as 42.

*/

/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */


//1
	// Change a number to use a specific amount of decimal places
	
var decimal = function (number) {
	var newNumber;

	newNumber = number.toFixed(2);

	return (number + " has been rounded to " + newNumber);	
};
console.log(decimal(2.1));

//2
	// Checks to see is the number above or below a number is within a certain percent
	
Number.prototype.isFuzzy= function(compare, percent){
    var dev= compare*(percent/100), n= +this;
    return n>= compare-dev && n<= compare+dev;
};

var n = 9;
console.log(n.isFuzzy(10, 10)); 


//3
	// Input two dates using new Date(yyyy,mm,dd)
	// Output format [Days,Hours,Minutes,Seconds] conversion for each at specific index shown
var first = '1/1/2000';
var second = '1/1/2001';

function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function daydiff(first, second) {
    return (second-first)/(1000*60*60*24);
}

var diff = daydiff(parseDate(first), parseDate(second));

console.log(diff);


//4

	// Changes a string "x" to an integer value x
var x = "42";
var integerForX = parseInt(x);
console.log('Number of the string: ' + x + ' is : ' +  integerForX);


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
	// Smallest value in array greater than a given number
	
Array.prototype.minGreaterThan=function(a){
    var t=this,r=Number.POSITIVE_INFINITY,i;
	
    for (i=0;i<t.length;i++) 
        if (a<t[i] && t[i]<r) 
            r=t[i];
	return r;
};

var arr=[1,6,12,14],n=5;
console.log(arr.minGreaterThan(n));


//2
	// Add up and total only numbers in an array
function myFunction(a,b,c,d,e) {
	return a+b+c+d+e;
}
var x = myFunction(10,20,30,40,50);
console.log('The sum of these parts is: ' + x); 


//3
	// Sorts objects in array
function custom_sort()
    {
        var example_array = [{a:2},{a:3},{a:1},{a:5},{a:4}];
        console.log("before sort: "+show_array(example_array));
        example_array.sort(sort_function);
        console.log("after sort: "+show_array(example_array));    
    }

    function sort_function(element1, element2)
    {
        if (element1.a > element2.a) return 1;
        else return -1;
    }
    
    function show_array(array)
    {
        var string ="";
        for (var i = 0; i < array.length; i++)
            string+= " {a: "+array[i].a+"} ";
        return "[ "+string+" ]";
    }

var array = [{a: 2}, {a: 3}, {a: 1}, {a: 5}, {a: 4}];
custom_sort(array) 
