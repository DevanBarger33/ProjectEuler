function isMultiple(number){
	// Checks to see if the given number is a multiple of 3 or 5
	// then returns a boolean
	if(number%3 || number%5 === 0){
		return true; 
	}
}

$("#range").blur(function(){
	var iterator = 0; 
	var sum = 0;
	var range = document.getElementById("range").value; 
	
	while (iterator < range){
		if (isMultiple(iterator)){
			sum = sum + iterator; 
		}
	iterator ++; 
	}
	alert(sum); 
}); 


