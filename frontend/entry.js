

let red = document.getElementById("red"); 

red.style.color = 'red';
red.style.fontWeight = 'bold';
red.style.fontSize = "30px";

red.innerHTML = "<div>Hello world!</div>";


let clicker = document.getElementById("clicker"); 

console.log(clicker);

clicker.addEventListener('click', function(){
	red.style.color = 'blue';
	
});


let inputField = document.getElementById("inputField"); 



//let messageLogs = document.getElementById("messageHouse"); 
let messageLogs = document.getElementById("messageLogs");


clicker.addEventListener('click', function(){
	//create message div
	let newMessage = document.createElement('div');

	//create text div
	let newText = document.createElement('span');
	newText.innerHTML = inputField.value;

	//create text div
	let newButton = document.createElement('button');
	newButton.innerHTML = 'Delete';

	newButton.addEventListener('click', function(){
		messageLogs.removeChild(newMessage);



	});



	//create date div
	let newDate = document.createElement('span');
	let timeStamp = new Date(Date.now()).toISOString();
	newDate.innerHTML = timeStamp;

	//append text and date divs to message div
	newMessage.appendChild(newDate);
	newMessage.appendChild(newText);
	newMessage.appendChild(newButton);

	//append message to messagelogs div
	messageLogs.appendChild(newMessage);
	inputField.value = '';



});



/*
create two divs when button is clicked
first div is date
2nd div is input.value;



<messagelogs>
	<message>
		<time></time>
		<text></text>
		<button></button>
	</message>
	<message>
		<time></time>
		<text></text>
		<button></button>
	</message>
	<message>
		<time></time>
		<text></text>
	</message>
	<message>
		<time></time>
		<text></text>
		<button></button>
	</message>
</messagelogs>

<messages-container>
	<message-logs>
		<text></text>
		<text></text>
		<text></text>
		<text></text>
	</message-logs>
	<message-date>
		<time></time>
		<time></time>
		<time></time>
		<time></time>
	</message-date>
</messages-container>
*/
