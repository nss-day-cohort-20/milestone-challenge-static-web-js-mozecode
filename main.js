//yank values from text fields in form
//first, target place you want to find the info you need: text boxes, submit button
let heightInput = document.getElementById("height");
let charInput = document.getElementById("character");
var button = document.getElementById("submit");

//declare global variables as placeholders
var height=0;
var character=null;

//add event listeners for click on submit button and enter in text box

heightInput.addEventListener("keyup", function(event){
		if (event.key==="Enter"){

			height = getHeight();
				if (height > 0 && isNaN(height)===false){

				}else{ alert("Please enter a value in both fields.");
			}
		}

})

charInput.addEventListener("keyup", function(event){
		if(event.key==="Enter"){
			character = getChar();
			if (character != ""){
				var tree = createTreeObject(height,character);
				treeBuilder(tree);
			}else {alert("Please enter a value in both fields");}
		}

})




button.addEventListener("click", function(){
	height = getHeight();
	character = getChar();
		if (height>0 && isNaN(height)===false && character != ""){
	var tree = createTreeObject(height,character);
	treeBuilder(tree);
	}else {
		alert("Please enter a value in both fields.");
	}
});

//create functions to get value from each box

function getHeight() {
	height =  heightInput.value;
 	return height;
}

function getChar(){

character= charInput.value;
return character;
}

//create function to create object
function createTreeObject(height, character){
	var tree ={};
 	tree.height = height;
 	tree.character =  character;
  	return tree;
}

//create function to build the tree using user input
function treeBuilder(object){

for(i=1; i<=height; i++)
{
        //Print spaces?
        // for(j=i; j<height; j++)
        // {
        //     console.log(" ");
        // }
        //Print tree
        for(j=1; j<=(2*i-1); j++)
        {
            console.log(`${character}`);
        }
        console.log(" ");

}
}