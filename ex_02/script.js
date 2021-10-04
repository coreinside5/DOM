//$('#yourElementId').prop('title', 'your new title');
//console.log(document.getElementsByClassName("important")); 
/*const elem = document.createElement ('title');
elem.innerText = 'This is an important item';
const target = document.querySelector(".important");
target.parentNode.insertBefore(elem,target);

var d1 = document.getElementsByClassName('important');
d1.insertAdjacentHTML('beforebegin', '<title></title>');
*/
/*let elts = document.getElementsByClassName(".important");
elts.forEach(element => {
    setAttribute("title","This is an important item");
}); */

//setAttribute("title","This is an important item");
function colorrnd()
{
    //function that generates a random color, it returns a 6 digits hexadecimal value
  let color = "#";
  const randNbr = Math.random().toString(16).slice(2,8);
  color += randNbr;
  return color;
}


const impElt = document.querySelectorAll('.important');
console.log(impElt);
impElt.forEach(element => {
    element.setAttribute("title","This is an important item");
});

const allImg = document.querySelectorAll('img');
console.log(allImg);
allImg.forEach(element => {    
        element.setAttribute("display","none");
        console.log(element);      
});

const allPar = document.querySelectorAll('p');
console.log(allPar);
allPar.forEach(element => {
    let classExist = "";
    if (element.className)
        classExist = "   The class of this paragraph is :" + element.className;
    else
        element.setAttribute("style","color:"+colorrnd()); 
    console.log(element.textContent + classExist);      
});
// shows 6 paragraphs, instead of 4