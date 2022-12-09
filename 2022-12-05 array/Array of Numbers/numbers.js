let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11]
let result = 0
for(let i = 0; i < arrayOfNumbers.length; i ++){
    result += arrayOfNumbers[i]
}
console.log(result)
2. 
for(let j = 0; j < arrayOfNumbers.length; j ++){
    if(arrayOfNumbers[j-1] < arrayOfNumbers[j] && arrayOfNumbers[j + 1] < arrayOfNumbers[j]){
        console.log(arrayOfNumbers[j])
    }
}