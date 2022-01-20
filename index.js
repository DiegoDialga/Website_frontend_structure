/*a = ["deep", 21, 21, 32, 32]
document.writeln(a[3])

var f = a.slice(3, 5)
document.write(" :",f)
document.writeln(a.slice(0, 2))*/
//some built-in functions in javascript
//fruit.indexOf('nan') gives the index of the entered variable
//fruit.slice(2, 6) will give the sliced vaule from 2 to 5
//fruit.replace('ban', 'nm') will replace a given variable with some another variable
//fruit.toUpperCase() will convert the string to upper case
//fruit.toLowerCase() wil give the string in lower case
//fruit.charAt(i) will give you the given index of the string
//fruit.split('') it will split the character surrounded bythe given character in the brackets
/* declaration of an array
fruits = ["banana", "apple", "orange"]
and the other way of doing it
fruits = new Array('banana', 'apple', 'orange')
we can also change the array from outside by simply giving another vaule to the index
fruits.toString() will convert the array to the string vaule
fruits.join('*') will join the array with the entered thing between the different vaules of the Array
fruits.pop() will give you the last element of the array
fruits.push() will add a variable to the array*/

/*fruits.shift() will give you the first element of an Array
fruits.unshift('kiwi') will add the first element to the array*/

/*narutoCharacters = ["Naruto", "Sasuke", "Kakashi", "Itachi", "Sakura", "Madara", "Obito"]
/*
document.writeln(narutoCharacters.pop())//pop will remove the last element from the array completly
narutoCharacters.push('Obito')//it will add a variable to the last place in an array
document.writeln(narutoCharacters)
narutoCharacters.shift()
document.writeln(narutoCharacters)
narutoCharacters.unshift("Naruto")
document.writeln(narutoCharacters)
document.writeln(narutoCharacters.toString())
*/
/*onePieceCharacters = ["Luffy", "Zoro", "Nami", "Usopp", "Brook"]

characters = narutoCharacters.concat(onePieceCharacters)
/*document.writeln(characters)
document.writeln(characters.slice(2, 10))*/
//document.writeln(characters.reverse())
//document.writeln();*/
/*numbers = [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
document.writeln(numbers.sort())
numbers = [10, 19, 23, 321, 34]
document.writeln(numbers.sort())*/
//sort can even filter a string or char in an array accroding to the alphabetical order
/*
let someNumbers = [5, 10, 2, 43 ,35, 34, 243, 6, 34, 43]
document.writeln(someNumbers.sort(function(a, b){return a-b}))
*/
/*var a1 = prompt('Enter an integer')
let a = new Array()
let emptyArray = new Array();
for( let num = 0; num < 10; num++){
  a[num] = prompt()
}
document.writeln(a)
*/
/*
anime = {
  animeName: 'Naruto',
  favouriteCharacter: 'Itachi',
  favouriteVillain: 'Madara'
}

document.writeln(anime.animeName)
anime.animeName= 'Boruto'
document.writeln(anime.animeName)*/

//finding the maximum and minimum element in an Array
//odd and even integers in separate Array
/*
let num = prompt("Enter the range of the array");
let a = new Array();
for(let i = 0; i < num; i++){
  a[i] = prompt("Enter the elements of the array");
}
document.writeln("Entered elements are: ",a)
a.sort(function(a, b){return (a-b)})
document.writeln("Minimum value: ",a[0])
document.writeln("Minimum value: ",a[num-1])*/
/*
let num = prompt()
let a = []
for(let i = 0; i < num; i++){
  a[i] = prompt()
}
document.writeln(a)
let max = a[0]
for(let i = 0; i < num; i++){
  if(a[i] > max)
  max = a[i]
}
document.writeln(max)
for(let i = 0; i < num; i++){
  for(let j = i+1; j < num - 1; j++){
    let temp = 0
    if(a[i] > a[j]){
      temp = a[i]
      a[i] = a[j]
      a[j] = temp
      }
    }
  }
  document.writeln(a)*/
/*
let num = prompt()
let a = [], a1 = [], a2 = []
for(let i = 0; i < num; i++){
  a[i] = prompt()
}
/*  if(a[i] % 2 == 0)
    a1.push(a[i])
  else
    a2.push(a[i])
}
document.writeln("Even array is: ", a1)
document.writeln("Odd array is: ", a2)
*/
/*
function av(a, b){
  return a-b
}
document.writeln(a.sort(av))*/
/*
let student = {
  name: "deepanshu",
  middleName: "singh",
  lastName: "negi",
  age: '18',
  studentInfo: function (){
    return (this.name + '\n' + this.middleName + '\n' + this.lastName);
  }
}
document.writeln(student.studentInfo())*/
/*switch(2){
  case 1:
  text = "weekday"
  break
  case 2:
  text = "monday"
}

document.writeln(text)
*/
