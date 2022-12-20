let input = [12341]
let base = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// debugger
for(let x = 0; x <= base.length; x ++){
    for(j = 0; j < base.lenght; j ++){
        if(input[j] == base[j]){
            base[x += 1]
        }
    }
    console.log(base[x])
}

