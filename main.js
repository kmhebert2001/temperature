/*
* Temperature Check v0.0.1
*
* Checks for valid Teacher input, compares Teacher temp
* to Student Temp, displays results telling if the
* Student temp is correct or incorrect
*
* 
*/


function calcTemps() {
	var teacherUnit = document.getElementById('teacherUnit').value;
	var teacherTemp = 1*(document.getElementById('teacherTemp').value);
	var targetUnit = document.getElementById('targetUnit').value;
	var studentTemp = 1*(document.getElementById('studentTemp').value);
	switch (targetUnit) {
		case 'F':
			teacherTemp = toFahrenheit(teacherUnit, teacherTemp);
		break;
		case 'K':
			teacherTemp = toKelvin(teacherUnit, teacherTemp);
		break;
		case 'R':
			teacherTemp = toRankine(teacherUnit, teacherTemp);
		break;
		case 'C':
			teacherTemp = toCelsius(teacherUnit, teacherTemp);
		break;
	}
	teacherTemp = Math.round(teacherTemp);
	studentTemp = Math.round(studentTemp);
	if (isNaN(teacherTemp)) { // requirements are for "incorrect" when studentTemp is NaN, implementing this way but should be followed up on to make sure
		updateResult('invalid');
	} else {
		if (studentTemp === teacherTemp) {
			updateResult('correct');
		} else {
			updateResult('incorrect');
		}
	}
}


// Any change or keyup event will trigger the temperature calculation
document.addEventListener("change", calcTemps);
document.addEventListener("keyup", calcTemps);



function toCelsius(unit, temp) {
	if (!temp && temp !== 0) return;
	switch (unit) {
		case 'F':
			return ((temp - 32) *5/9);
		break;
		case 'K':
			return (temp - 273.15);
		break;
		case 'R':
			return ((temp - 491.67) * 5 / 9);
		break;
		case 'C':
			return temp;
		break;
	}
}

function toFahrenheit(unit, temp) {
	if (!temp && temp !== 0) return;
	switch (unit) {
		case 'F':
			return temp;
		break;
		case 'K':
			return (((temp - 273.15) * 9 / 5) + 32);
		break;
		case 'R':
			return (temp - 459.67);
		break;
		case 'C':
			return ((temp * 9 / 5) + 32);
		break;
	}
}

function toKelvin(unit, temp) {
	if (!temp && temp !== 0) return;
	switch (unit) {
		case 'F':
			return (((temp - 32) *5/9) + 273.15); 
		break;
		case 'K':
			return temp;
		break;
		case 'R':
			return (temp * 5 / 9);
		break;
		case 'C':
			return (temp + 273.15);
		break;
	}
}

function toRankine(unit, temp) {
	if (!temp && temp !== 0) return;
	switch (unit) {
		case 'F':
			return (temp + 459.67);
		break;
		case 'K':
			return (temp * 1.8);
		break;
		case 'R':
			return temp;
		break;
		case 'C':
			return ((temp * 9 / 5) + 491.67);
		break;
	}
}

function updateResult(result) {
	document.getElementById('result').innerHTML = result;
}