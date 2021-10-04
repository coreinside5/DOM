
function colorrnd()
{
  //function that generates a random color, it returns a 6 digits hexadecimal value
  let color = "#";
  const randNbr = Math.random().toString(16).slice(2,8);
  color += randNbr;
  return color;
}

console.log(document.title);
document.title = 'Modifying the DOM';
document.body.style.backgroundColor = colorrnd();

const myElement = document.body;
for (let i = 0; i < myElement.children.length; i++) {
  console.log(myElement.children[i].tagName);
}
console.log(document.body.children);