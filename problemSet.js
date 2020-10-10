function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false
    } 
}

console.log(isEven(4))
console.log(isEven(21))
console.log(isEven(68))
console.log(isEven(333))


function factorial(num) {
    if (num === 0 || num === 0) {
        return 1;
    }
    for (var i = num - 1; i >= 1; i--) {
        num = num * i ;
        
    }
    return num
  }
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));
  

function kebabToSnake(str) {
    var newStr = str.replace(/-/g,  '_');
    return newStr;
}
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));