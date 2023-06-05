/* Declare variables below to save the different sections (divs) of your story*/

let buttonOne = 
  document.querySelector("button");
buttonOne.onclick = function() { 
  let divs =
    document.querySelector(".story-opening");
  divs.style = "display:none";
  let divTwo = document.querySelector(".title");
  divTwo.style = "display:none"
}; 

  
let buttonNo = document.querySelector(".option-two");
   buttonNo.onclick=function( ) {
    let divNo = document.querySelector(".option-two-screen");
      divNo.style= "display:block"; 
     let storyOpening = document.querySelector(".story-opening")
     storyOpening.style= "display:none";
};

let buttonYes = document.querySelector(".option-one");
   buttonYes.onclick=function( ) {
    let partOne = document.querySelector(".option-one-screen");
      partOne.style= "display:block"; 
     let storyOpening = document.querySelector(".story-opening")
     storyOpening.style= "display:none";
     
};


//display:none






/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
