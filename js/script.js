var nr = 0;
restart(nr);
function catchNum() {
	var message = "";
	var value = document.getElementById("nr").value;
	message = ((value >= nr-10) && (value <= nr+10)) ? "Тепло": "Холодно";
	if (value == nr) {message = "<span class='ПОБЕДА'>Это оно!!!</span>";}
	document.getElementById("rez1").innerHTML = message;
	document.getElementById("gen").innerHTML = value;
}
function enterNum() {
	var value = document.getElementById("txt").value;
	var template = /^[0-9]{1,2}$/;
	var message = "";
	if (!(template.test(value))) {
		message = "Введите целое число из одной или двух цифр!";
	} else if (value==nr) {
		message = "Браво! Ты угадал число!";
	} else if (value >= nr-5 && value <= nr+5) {
		message = "Горячо!";
	} else if (value >= nr-10 && value <= nr+10) {
		message = "Тепло!";
	} else {
		message = "Холодно!";
	}
	document.getElementById("rez2").innerHTML = message;
}
function restart() {
	nr = Math.floor(Math.random(nr) * 78);
	document.getElementById("rez1").innerHTML="";
	document.getElementById("rez2").innerHTML="";
	document.getElementById("txt").value="";
	document.getElementById("nr").valueL="";
	document.getElementById("gen").innerHTML="";
}