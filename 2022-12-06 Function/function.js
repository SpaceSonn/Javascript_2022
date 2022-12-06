console.log('Functions')
//1.f(x, y) = x`2 + y`2
function f1(x, y){
    console.log(Math.pow(x, 2) + Math.pow(y, 2));
}
// calling the f1 function 
f1(3, 4);
// f(x) = x`e
function f2(x){
    console.log(Math.pow(x, Math.E))
}
f2(3)
// f(a, b) = a`2 - b`2
function f3(a, b){
    console.log(Math.pow(a, 2)-Math.pow(b, 2));
}
f3(2, 4)
// f(a, b) = sqrt(a`2 + b`2)
function f4(a, b ){
    console.log(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)))
}
f4(3, 4)
// f(y) = y`2 - 2y + y 
function f5(y){ 
    console.log((Math.pow(y, 2) - 2 * y + 4))
}
f5(2)
// F(a, b) = a - b * (a`2 + b``2) - a
function f6(a, b){
    console.log((a - b * (Math.pow(a, 2) + Math.pow(b, 2)) - a))
}
f6(4, 2)
// f(a, b) = 2 * (a + b)
function f7(a, b){
    console.log((2 * (a + b)))
}
f7(2, 4)
// f(a, b) = (a + b)`2
function f8(a, b){
    console.log((Math.pow((a + b), 2)))
}
f8(1, 2)
// f(a, b) = a`2 - b`2
function f9(a, b){
    console.log((Math.pow(a, 2) - Math.pow(b, 2)))
}
f9(2, 2)
// f(a, b) = a * b 
function f10(a, b){
    console.log((a * b))
}
f10(3, 3)
// f(a, b) = 3 * (a * b)`2
function f11(a, b){
    console.log((3 * Math.pow((a + b), 2)))
}
f11(2, 4)
// f(x, y) = 3x`3 - 2y`2





function myFunction(p1, p2) {
    return p1 + p2
}
console.log(myFunction(2, 3))

function isEven(number) {
    let result = '';
    if( number % 2 == 0 ){
        result = 'It is even number'
    }else{ 
        result = 'it is odd number'
    }
    return result
}
console.log(isEven(5))

// assignment 

console.log(findMax(1, 3))
console.log(findMax(100, 3))
console.log(findMax(100, 100))

function findMax(a, b ){
    if (b < a){
        return a;
    }else {
        return b;
    }
    
}

// expression function

let x = function (a, b){
    if (b < a){
        return a;
    }else {
        return b;
    }
}
console.log(x(990, 980))

// arrow function 

let y = (a, b) => {
    if (b < a){
        return a;
    }else {
        return b;
    }
}

console.log(y(30, 50))
