function StartTime(){
	let date = new Date();
	let dateElement = document.getElementById("date");
	let timeElement = document.getElementById("time");
	
	dateElement.innerText = date.toLocaleDateString();
	timeElement.innerText = date.toLocaleTimeString();
}