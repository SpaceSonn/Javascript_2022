console.log( ' day 15 array')

let french_players = [ 'LLo','kou','var','upa','tch','rab','mba','gir','dem','tcho','ubo']
let poland_players = ['lew','fra','szy','zie','kam','kry','kiw','gli','szs','ber','cash']
 console.log(french_players[2])
french_players[2] = 'par' 
console.log(french_players)
for(let i = 0; i < 11; i ++){
    console.log(french_players[i])
}
console.log('endees polish players')
for(let o = 0; o < poland_players.length; o ++){
    console.log(poland_players[o])
}
 
// initial state of array is : [1, 2, 3, 4, 5, 10, 11, 3, 5, 8]
let num = [1, 2, 3, 4, 5, 10, 11, 3, 5, 8]
for( let x = 0; x < num.length; x ++ ){
    if( num[x] % 2 == 0){
        console.log(num[x])
    }
}
console.log('endees 4oor nemegduulne')
let numb = [5, 6, 7, 9, 15, 7, 9, 12]
for(let y = 0; y < numb.length; y ++){
    numb[y] += 4;
    console.log(numb[y])
}
console.log('niilber')
let a = 0
for(let z = 0; z < num.length; z ++){
    a += num[z]
}
console.log(a)
// let rev = [1, 2, 3, 4, 5, 6]
// for( let x = 0; x < rev.length; x ++ ){}
 let tictac = [
    ['*','*','*'],
    ['*','*','*'],
    ['*','*','*']]
    let output = ''
    for(let i = 0; i < tictac.length; i ++){
    for( let j = 0; j < tictac[0].length; j ++){
      
        output += '\n'
        console.log(tictac[i][j]) 
    }
    
}

