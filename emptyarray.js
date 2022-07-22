const emptyArray = [];

console.log(emptyArray[0]); // undefined
console.log(emptyArray[1]); // undefined
console.log(emptyArray.length); // 0

const newArray = [,,,];
console.log(newArray); // [<3 empty items>] 

emptyArray.push(100);
newArray.push(200);

console.log(emptyArray); // [ 100 ] - lista com uma posição e um elemento.
console.log(newArray); // [ <3 empty items>, 200 ] - lista com quatro posições, mas somente um elemento (na quarta posição).
