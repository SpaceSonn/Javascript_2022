

const minNum = Number(prompt('type here'))
const maxNum = Number(prompt('type here'))
const random = Math.floor(Math.random()*(maxNum-minNum+1)+minNum)
console.log(random)









const answer1 = 'mongolia' 
const answer2 = 'russia' 
const answer3 = 'united states of america'
const answer4 = 'japan'
const answer5 = 'white'
    let question1 = prompt( 'Oros hyatad 2 iin dund baidag uls')
    let question2 = prompt( 'Mongol ulsiin hoid horsh')
    let question3 = prompt( 'USA yamar ugnii tovchlol ve')
    let question4 = prompt( 'omnod solongostoi oiroltsoo baidag aral uls')
    let question5 = prompt( 'uul yamar ongotei ve')
    let score = 0
        if (question1.toLocaleLowerCase() == answer1.toLocaleLowerCase()) {
            score ++
        }
        if (question2.toLocaleLowerCase() == answer2.toLocaleLowerCase()) {
            score ++
        }
        if (question3.toLocaleLowerCase() == answer3.toLocaleLowerCase()) {
            score ++
        }
        if (question4.toLocaleLowerCase() == answer4.toLocaleLowerCase()) {
            score ++
        }
        if (question5.toLocaleLowerCase() == answer5.toLocaleLowerCase()) {
            score ++
        }

            if (score == 5) {
                alert( 'Ta A+ avlaa')
            }else if( score == 4){
                alert ('Ta A avlaa')
            }else if( score == 3){
                alert('Ta B avlaa')
            }else if( score == 2){
                alert('Ta C avlaa')
            }else if( score == 1){
                alert('Ta D avlaa')
            }else {
                alert('Ta F avlaa ')
            }



















let num = prompt( '1-10 hoorond minii bodson toog taa')
const number = 8  

if (num == number) {
    alert('tiimee ta chadlaa')
}else if(num < number) {
    alert(' arai l bagdchlaa')
}else {
    alert('yasan ch ih toovdee ')
}

