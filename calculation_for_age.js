
function enter(){
let age = prompt("Enter your birth year in years: ")
var ageInDays = (age_calculation = 2022 - age) * 365;
var h1 = document.createElement('h1')
var textAnswer = document.createTextNode('You are ' + ageInDays + ' Days old')
h1.setAttribute('id', 'ageInDays')
h1.appendChild(textAnswer)
document.getElementById('result_div').appendChild(h1)
}

function clickMe(){
  document.getElementById('click_me').enter()
}

function reset(){
  document.getElementById('ageInDays').remove()
}
