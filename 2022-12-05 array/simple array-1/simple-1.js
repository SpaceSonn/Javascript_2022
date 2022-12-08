
let itCompanies = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
1.
console.log(itCompanies)
2.
console.log(itCompanies.length)
3.
for(let i = 0; i < itCompanies.length; i += 3){
    console.log(itCompanies[i])
}
4.
console.log('endees buh company hevlene')
for(let j = 0; j < itCompanies.length; j ++){
    console.log(itCompanies[j])
}
5.
console.log('endees tom usgeer')
for(let x = 0; x < itCompanies.length; x ++){
    console.log(itCompanies[x].toUpperCase())
}
6.
let a = ''
    for( let y = 0; y < itCompanies.length; y ++){
    a += itCompanies[y]
    a += ' '
}
console.log(a + ' зэрэг мэдээллийн технологийн томоохон компаниуд.')