console.log('Date and Function')

let now = new Date()
console.log(now);

let startPCTime = new Date(0)
console.log(startPCTime);

let dec31_1969 = new Date(-24 * 3600 * 1000)
console.log(dec31_1969);

let date = new Date("2017-01-26")
console.log(date);



// tuhain tsagiin busiin odoogyn tsag 
console.log(now.getHours());
console.log(now.getMinutes())
console.log(now.getMonth())
console.log(now.getSeconds())


// assignment onoodroos ehleed 12 sarin 31n hurtel 
//hedehn odor heden tsagh heden minute baigaag olnouuu 
let tuesday = new Date()
console.log(tuesday)
let lastDayOf2022 = new Date("2022-12-31")
console.log(lastDayOf2022)

console.log(tuesday.getDate())

console.log(lastDayOf2022.getDate())

let till = lastDayOf2022.getDate() - tuesday.getDate()
let hour = Math.abs(lastDayOf2022.getHours() - tuesday.getHours())
let min = Math.abs(lastDayOf2022.getMinutes() - tuesday.getMinutes())
console.log('Onoodroos shine on gartal ' + till + ' odor ' + hour + ' tsag ' + min + ' minute uldsen baina.' )