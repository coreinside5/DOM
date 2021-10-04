const learnArray =["Stephane","Aurore","JC","Fanny","Stephanie","Fabrice","Bruno","Raoni","Rene","Francis","Batcheba","Rouslan","Frederic","Phil","Michael","Antoine"];

function colorrnd()
{
  //function that generates a random color, it returns a 6 digits hexadecimal value
  let color = "#";
  const randNbr = Math.random().toString(16).slice(2,8);
  color += randNbr;
  return color;
}

function getContrastYIQ(hexcolor){
 
  hexcolor = hexcolor.replace("#", "");
  var r = parseInt(hexcolor.substr(0,2),16);
  var g = parseInt(hexcolor.substr(2,2),16);
  var b = parseInt(hexcolor.substr(4,2),16);
  var yiq = ((r*299)+(g*587)+(b*114))/1000;
  return (yiq >= 128) ? 'black' : 'white';
}

function random_bg_color() {
   //other function that generates rgb  color
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
  return bgColor;
  //document.body.style.background = bgColor;
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

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  function createAll(){
      let shuffleArray = learnArray.sort(() => Math.random() - 0.5);
      shuffleArray.forEach(element => {
          addElement(element);          
      });
        const allPar = document.querySelectorAll('section');
        allPar.forEach(element => {   
            let rbc = colorrnd(); 
            //console.log(rbc);
            //console.log(getContrastYIQ(rbc));
            element.setAttribute("style","background-color:"+rbc+";"+"color:"+getContrastYIQ(rbc));   
        });
  }


document.body.onload = createAll;


