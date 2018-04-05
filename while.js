var allNumbers = -10;

while (allNumbers <= 19) {
	console.log(allNumbers);
	allNumbers++;
}

console.log("this is the for loop");

for(var i = -10; i <= 19; i++){
	console.log(i);
}

var allEven = 10;

while(allEven <=40) {
		console.log(allEven);
		allEven+=2;
}

console.log("this is the for loop");

for(var i = 10; i <= 40; i+=2){
	console.log(i);
}






var allOdd = 300;

while(allOdd <=333) {
	if (allOdd %2 !== 0) {
		console.log(allOdd);
	}
	allOdd++;
}


console.log("this is the for loop");

for(var i = 300; i <= 333; i++) if (i % 2 !== 0) {
	console.log(i);
}

console.log("this is the for loop");

for(var i = 5; i <= 50; i++) if (i % 5 === 0 && i % 3 ===0) {
	console.log(i);
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