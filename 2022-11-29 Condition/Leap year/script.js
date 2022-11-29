let year = prompt( 'Enter Year')
    let then = year % 4 == 0 && year!=0 || year % 400 == 0 ? ' ondor jil mon' : ' ondor jil bish'
    alert(then)