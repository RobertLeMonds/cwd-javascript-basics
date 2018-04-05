var age = prompt("How old are you?");




if (age < 18) {
	console.log("sorry, you are not old enough to enter the venue");
}

else if (age < 21) {
	console.log("You can enter, but cannot drink");
}

else if (age < 1) {
	console.log("Error");
}

else if (age === 21) {
	console.log("Happy 21st birthday!!")
}

else {
	console.log("Come on in. You can drink.");
}

