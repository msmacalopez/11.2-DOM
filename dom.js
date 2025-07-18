/////////////Selecting HTML Elements//////////////////////

//access to whole document
// const elm = document;
// console.log(document);

//Use ID -->get individual item
const byid = document.getElementById("first");
console.log("by id:", byid);

//Use class name -->return as HTMLcollection (even is only 1)
const byclass = document.getElementsByClassName("info");
console.log("by class:", byclass); //shows collection
console.log(byclass[0]); //shows 1 element

//Get element by Tag Name --> return as HTMLcollection
const bytag = document.getElementsByTagName("div");
console.log("by Tag:", bytag);
console.log(bytag[1]);

//Use querySelector --> get only 1, the first found
const byQuerySelector = document.querySelector(".display");
console.log("Query1: ", byQuerySelector);

//Query Selector for class
const queryElemClass = document.querySelector(".first");
console.log("Query2Class: ", queryElemClass); //returns the first one of class "first"

//Query Selector for id
const queryElemId = document.querySelector("#first");
console.log("Query3Id: ", queryElemId);

//Query Selector for tag
const queryElemTag = document.querySelector("p");
console.log("Query4Tag: ", queryElemTag);

//Selected Nested elements/paragraph, selects the first like that
const my_p = document.querySelector(".info>div>p");
console.log("Query5: ", my_p);

//Use querySelectorAll --> return as a NodeList of all elements, even if only 1
const queryAll = document.querySelectorAll(".first");
console.log("Query All: ", queryAll);

/////////////Changing HTML Elements//////////////////////

// document.write()
// .innerHTML
// .innerText

//1)
const myinfo = document.querySelector(".info");
console.log(myinfo);

///2) getting info from browser to JS
let value = myinfo.innerText;
console.log(value); //returns:
//Content before paragraph
//Content inside info

value = myinfo.innerHTML;
console.log(value); //returns:
/* <div>
Content before paragraph
<p>Content inside info</p>
</div> */

document.write(
  "Hey, im adding to the end of the script(js) in the Elements of browser</br></br>"
);

///3) Now, sending(pushing) info from JS to browser
myinfo.innerText = "This one replace the div.info with paragraph inside";
console.log(myinfo.innerText);

myinfo.innerHTML =
  "<h1>This one replace the div.info with paragraph inside</h1>";
console.log(myinfo.innerHTML);

///2)Dynamically create elements

//a)append TextNode at the end of Body element
const elem = document.querySelector("body");
const textNode = document.createTextNode(
  "Hi, this is content 1 created dynamically"
);
elem.appendChild(textNode);

//b)append Element to the end
const newElem = document.createElement("p");
newElem.innerText = "This is my text 2 inside new paragraph dyn";
elem.appendChild(newElem); //overwritten by the next

//c)Add Elements in the middle with "insertBefore"
//Needs to know the element to put it before
//example: myinfo=document.querySelector(".info");

//elem=body
elem.insertBefore(newElem, myinfo);
elem.insertBefore(newElem, document.querySelector(".info")); //better
//When i print body, this is updated and includes all the modifications:
console.log(elem);

//3)Deleting Elements
// const toDelete = document.querySelector("[href='google.com']");
// elem.removeChild(toDelete);

elem.removeChild(document.querySelector("[href='google.com']"));

//4)Replace Elements
//replaceChild(newElement, oldElement)
const newElem2 = document.createElement("a");
newElem2.href = "https://www.google.com.au";
newElem2.innerText = "Google Australia";

elem.replaceChild(newElem2, document.querySelector("[href='amazon.com.au']"));

///////MODIFY CSS
