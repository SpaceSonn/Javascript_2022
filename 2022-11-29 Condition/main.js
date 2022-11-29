let username = prompt( 'What is your name')
const date = new Date()
const time = date.getHours() 
if (11 >= time) {
alert( 'Ogloonii mend' + " " + username )
} else if(17 >= time) { 
alert( 'Odriin mend' + " " + username)
} else { 
alert( 'Oroin mend' + " " + username)

}
// ternary/ 
let age = prompt( 'What is your age?' ) 
let message = age >= 18 ? 'Enjoy your video' : '18 hurtlee huleejdee '
alert(message)
// challenge /
let num = prompt( 'Enter number')
let result = num % 2 == 0 ? 'even' : 'odd'
alert(result)




/*let age = prompt( 'What is your age ?')

if (age <= 18) {
    alert( 'Ta nasand hureegui bna sorry' )
} 
else {
    alert( 'Ta nasand hursen bn enjoy your video' )
}

/*    const date = new date()
    const time = date.gethours() 
    alert(time)*/
                

