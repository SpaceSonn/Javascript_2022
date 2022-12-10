let n = 5
let x = ''
for( let i = 0; i <= n; i ++){
    for(let j = 1; j <=i; j ++ ){
        x += j;
    }
    x += '\n'
}
console.log(x)



console.log( '----------------endees urvuu-----------------')

let y = ''
for(let i = 0; i <= n; i++){
    for(j = n; j > i; j -- ){
        y += j
    }
    y += '\n'
}
console.log(y)