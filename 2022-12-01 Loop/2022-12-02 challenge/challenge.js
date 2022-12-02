const num = 11 
let output = ''
for (i = 1; i <= num; i++){
    for(j = 1; j <= num; j++){
        if( i == 1 || j == 1 || j == num || i == num || i == j || j - 1 == num - i ){
            output += '* '
        }else{
            output += '  ' 
        }
}
output += '\n' 
}
console.log(output)
