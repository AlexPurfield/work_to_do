//global variables

var enterButton = 
document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

//functions
function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement("li"); 
    //create element list item

    li.appendChild(document.createTextNode(input.value)); //makes text from input field the list item text 
}   ul.appendChild(li); //adds list item to unordered list
input.value=""; //reset text input field

// START STRIKETHROUGH
//because it's in the function, it only adds it for new items
function crossOut() {
    li.classList.toggle("done");
}

li.addEventListener("click",crossOut);
//END STRIKETHROUGH 

// START ADD/DELETE BUTTON

var deleteBtn = document.createElement("button");
deleteBtn.appendChild(document.createTextNode("X")
);
li.appendChild(deleteBtn);
deleteBtn.addEventListener("click",deleteListItem);

//END ADD/DELETE BUTTON