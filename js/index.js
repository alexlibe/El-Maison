let dateElement;
let timeElement;

function StartTime(){
	const ONE_SECOND_IN_MILLISECONDS = 1000
	let date = new Date();
	
	dateElement = document.getElementById("date");
	timeElement = document.getElementById("time");
	dateElement.innerText = date.toLocaleDateString();
	timeElement.innerText = date.toLocaleTimeString();
	
	setInterval(SetDateTime, ONE_SECOND_IN_MILLISECONDS)
}

function SetDateTime(){
	let date = new Date();
	dateElement.innerText = date.toLocaleDateString();
	timeElement.innerText = date.toLocaleTimeString();
}

function Search(){
	alert("Hello")
}