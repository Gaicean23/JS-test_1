var myNum = 10,
    myStr = 'строка',
    myBool = true,
    myArr = [1, 2, 3, 4, 5],
    myObj = { first: 'First Name', last: 'Last Name' };

console.log(myNum);
console.log(myStr);
console.log(myBool);
console.log(myArr);
console.log(myObj);

var decimal2 = myNum.toFixed(2);

var i = 50;
console.log(++i);
console.log(i);

var i = 50;
console.log(i++);
console.log(i);

var i = 50;
console.log(--i);
console.log(i);

var i = 50;
console.log(i--);
console.log(i);


var myTest = 20;
myTest += 10;
myTest -= 10;
myTest *= 5;
myTest /= 3;
myTest %= 6;

console.log(20 + 10);
console.log(20 - 10);
console.log(20 * 5);
console.log(20 / 3);
console.log(20 % 6);


var myPi = Math.PI;
console.log(myPi);

var myRound = Math.round(89.279);
console.log(myRound);


var myRandom = Math.random() * 10;
console.log(myRandom);

var myPow = Math.pow(3, 5);
console.log(myPow);



var strObj = { str: 'Мама мыла раму, рама мыла маму' };
strObj.length = strObj.str.length
console.log('strObj=', strObj);


var isRamaPos = strObj.str.indexOf('рама');
console.log('isRamaPos', isRamaPos);



var strReplace = strObj.str.replace('Мама мыла раму, рама мыла маму', ('Мама моет раму, Рама держит маму'));
console.log('strReplace', strReplace);

console.log(strObj.str.toUpperCase());
console.log(strObj.str.toLowerCase());






