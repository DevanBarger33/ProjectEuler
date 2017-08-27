function isMultiple(number){
	// Checks to see if the given number is a multiple of 3 or 5
	// then returns a boolean
	if((number%3 == 0) || (number%5 == 0)){
		return true; 
	}else{
		return false; 
	}
}

$("#range").blur(function(){
	var sum = 0;
	var range = document.getElementById("range").value; 
	
	if (!(range <= 0)){
		for(i=1; i<range; i++){ 
			if (isMultiple(i)){
				sum += i; 
			}
		}
		$("#solution").text(sum); 
	}else{
		alert("Invalid limit! Please enter a value > 0."); 
	}
}); 


