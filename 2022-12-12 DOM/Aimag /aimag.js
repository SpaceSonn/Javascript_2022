let aimags = document.querySelectorAll('ul li');
console.log((aimags[0]).textContent);
console.log((aimags[aimags.length-1]).textContent);
console.log((document.getElementById('aimag-315')).textContent);
aimagNames.style.color = 'blue'
aimagNames.style.fontSize = '30px'
aimagNames.style.border = '10px solid grey'
aimagNames.style.padding = '0'
for(i = 0; i < aimags.length; i ++){
    aimags[i].style.margin = '5px auto 5px auto';
    aimags[i].style.border = '5px solid black';
    aimags[i].style.listStyle = 'none';
    aimags[i].style.width = '50%';
    aimags[i].style.textAlign = 'center';
}
for(j = 0; j < aimags.length; j ++){
    if(aimags[j].id[6] == 1){ aimags[j].style.backgroundColor = 'teal'}
    if(aimags[j].id[6] == 2){ aimags[j].style.backgroundColor = 'indigo'}
    if(aimags[j].id[6] == 3){ aimags[j].style.backgroundColor = 'cyan'}
    if(aimags[j].id[6] == 4){ aimags[j].style.backgroundColor = 'coral'}
    if(aimags[j].id[6] == 5){ aimags[j].style.backgroundColor = 'red'}
}
