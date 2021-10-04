let learnArray =["Stephane","Aurore","JC","Fanny","Stephanie","Fabrice","Bruno","Raoni","Rene","Francis","Batcheba","Rouslan","Frederic","Phil","Michael","Antoine"];

function colorrnd()
{
  //function that generates a random color, it returns a 6 digits hexadecimal value
  let color = "#";
  const randNbr = Math.random().toString(16).slice(2,8);
  color += randNbr;
  return color;
}

function addElement (name) {
    // create a new section element
    const newSect = document.createElement("section");
  
    // and give it some content
    const newContent = document.createTextNode(name);
  
    // add the text node to the newly created div
    newSect.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    //const currentDiv = document.getElementById("div1");
    document.querySelector('article').appendChild(newSect);
  }
  function createAll(){
      learnArray.forEach(element => {
          addElement(element);          
      });
        const allPar = document.querySelectorAll('section');
        allPar.forEach(element => {    
            element.setAttribute("style","background-color:"+colorrnd());        
        });
  }


document.body.onload = createAll;


