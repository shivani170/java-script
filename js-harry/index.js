//1# Ways to print in java script:
//    console.log("Hello World");
//    alert("me")
//    document.write("hi");


//2# Java script console API:
//    console.log("Hello World");
//    console.warn("This is a warning")
//    console.error("this is an error");
//    console.clear()
//    console.log(4 + 5)    //It calculates


//02 March 2021


//3# Java script variable:
// var num1 = 48;
// var num2 = 52;
// console.log(num1 + num2);

//4 Data type in java script:
//1. Primitive   : undefined, null, number, string, boolean, symbol
//2. Reference   : Arrays, Objects

//string
// var str1 = "This is a string";
// var str2 = "This is again a string";
// //num
// var num = 23;
// //Objects
// var marks ={
//     ravi: 33,
//     harry: 99,
//     shubham: 45
// }
// console.log(num);
// console.log(str1, str2);
// console.log(marks);
// //undefined
// var und = undefined;
// und;
// console.log(und)
// console.log(undefined)
// var n = null;
// console.log(n)

// //Array
// var arr = [1, 2.3,"bablu", 4, 5]
// console.log(arr)

//Operator in java script
//1. Arithematic Opertaor(+,-,*,/)
//2. Assignment Opertaor(=)
//3. Comparison operator(==, >=, <=, >, <)
//4. Logical operator
// console.log (true && false, true || false);
// console.log(true && true);
// //Logical not
// console.log(!true);
// console.log(!false);

//Java script function
// DRY "Do Not Repeat yourself
// function avg (a,b){
//     return (a+b)/2
// }
// c1 = avg(4,6)
// c2= avg(68,32)
// console.log(c2);

//Conditional Operator

// var age = 67;
// if(age < 18){
//     console.log("you are a kid, You can not vote");
// }
// else if(age < 45){
//     console.log("ÿou can vote and drink")
// }
// else{
//     console.log("Ÿou can vote");
// }

//Loops:

// var arr = [1, 2, 3, 4, 5]
// console.log(arr)
// for ( i=0; i<= arr.length; i++){
//    if(i == 2) continue;//break
//     console.log(arr[i])
// }

// arr.forEach((element)=>console.log(element));

// let j=0;
// while(j < arr.length){
//      console.log(arr[j])
//      j++
// }

//Methods on Array:
// let myArr = ["fan", "camera", true, 10, null ]
// console.log(myArr.length);
// myArr.pop()
// myArr.push("shivani")
// myArr.shift()
// myArr.unshift("hi")



// console.log(myArr.sort())    //sorted
// console.log(myArr.toString());  //strings

// //Strings methos in java script
// let str = "hi i am shivani bhatt"
// console.log(str.length)
// console.log(str.indexOf("be"))
// console.log(myArr.slice(3,9))
// console.log(str.slice(3,9))
// console.log(str.replace("shivani", "bhatt"))

// let myDate = new Date();
// console.log(myDate.getDate())

//dom
elem = document.getElementById("click");
console.log(elem)
elem2= document.getElementsByClassName("container");
console.log(elem2)