// let newLi = document.getElementById('myUL')

// newLi.addEventListener('click', function(event){
// 	console.log('clicked')
// })

// let newLi = document.querySelector('ul');

// newLi.addEventListener('click', function(event){
// 	console.log(event.target, event.currentTarget)
// })

// Cross out item when you click on it // 
let li = document.querySelector('ul');

li.addEventListener('click', function(event){
	if (event.target.tagName == 'LI'){
	event.target.classList.toggle('checked');
	}
}, false);

// Close list items to get rid of them after they are done  //
var closebtns = document.getElementsByClassName("close");

var i;

for (i = 0; i < closebtns.length; i++) {
	closebtns[i].addEventListener("click", function(){
		this.parentElement.style.display = "none";
	});
}

// add list item - could not get it to work //

// let addButton = document.querySelector('#add_button')
// let addInput = document.querySelector('#myInput')


// addButton.addEventListener('click, function' ()){

// 	let newItem =  document.getElementsById('myInput').value

// 	if (newItem) {

// 		addItemTodo(newItem)

// 		document.getElementsById('myInput').value = ''
// 	}
// })


// addInput.addEventListener('keypress', function (e) {
//   // did the user press *enter*? if yes then continue
//   if (13 === e.keyCode) {
//     // grab the value of the input tag
//     let newItem = document.getElementById('myInput').value
//     // if the input tag is not empty then run our function to add an item
//     if (newItem) {
//       // this function will add a new item to the todo list
//       addItemTodo(newItem)
//       // reset the input after we added a new item
//       document.getElementById('myInput').value = ''
//     }
//   }
// })

// function addItemTodo(text) {

//   let list = document.getElementById('myUL')

//   let item = document.createElement('li')

//   item.innerText = text


