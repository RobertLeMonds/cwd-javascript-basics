var allNumbers = -10;

while (allNumbers <= 19) {
	console.log(allNumbers);
	allNumbers++;
}

var allEven = 10;

while(allEven <=40) {
		console.log(allEven);
		allEven+=2;
}


var allOdd = 300;

while(allOdd <=333) {
	if (allOdd %2 !== 0) {
		console.log(allOdd);
	}
	allOdd++;
}


//Incorrect solution
/*var allDivi = 5;

while(allDivi <=50) {
	if (allDivi %3) {
		console.log(allDivi);
	}

	else if (allDivi %5) {
		console.log(allDivi);
	}
	allDivi++;
}

*/
//Correct Solution

var counter = 5;

while(counter <= 50) {
	if(counter % 5 === 0 && counter % 3 ===0){
		console.log(counter);
	}
	counter+=1;
}