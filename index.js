// Write your code here!
const element=document.getElementsByName("main");
console.log(element.name)
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Yvonne is the champion";
const newHeaderElement = document.getElementById('main').appendChild(newHeader);