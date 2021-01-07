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
	const DDGO_URL = "https://duckduckgo.com/?kp=-1&kl=us-en&q=";
	let searchQuery = document.getElementById("search-bar").value;

	window.location.href = DDGO_URL + searchQuery;
}