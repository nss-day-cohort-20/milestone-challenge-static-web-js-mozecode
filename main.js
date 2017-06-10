//yank values from text fields in form
//first, target place you want to find the info you need: text boxes, submit button
let heightInput = document.getElementById("height");
let charInput = document.getElementById("character");
var button = document.getElementById("submit");

//add event listeners for click on submit button and enter in text box
var height=0;
var character=null;

// heightInput.addEventListener("keyup", function(event){
// 		if (event.key==="Enter"){

// 		height = getHeight();
// 		return height;
// 	}

// })


// charInput.addEventListener("keyup", function(event){
// 		if (event.key==="Enter"){

// 		character = getChar();
// 		return character;
// 	}

// })

button.addEventListener("click", function(){
	height = getHeight();
	character = getChar();
	var tree = createTreeObject(height,character);
	treeBuilder(tree);
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

function createTreeObject(height, character){
	var tree ={};
 	tree.height = height;
 	tree.character =  character;
  	return tree;
}

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















