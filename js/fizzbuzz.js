$(document).ready(function () {
	var fizz = "fizz";
	var buzz = "buzz";
	for (var i = 1; i <= 100; i++) {
		if (i%3 == 0 && i%5 == 0) {
			$("ul").append("<li>" + fizz + buzz +"</li>"); 
			console.log(fizz + buzz);
		} else if (i%5 == 0) {
			$("ul").append("<li>" + buzz+"</li>"); 
			console.log(buzz);
		} else if (i%3 == 0) {
			$("ul").append("<li>" + fizz+"</li>"); 
			console.log(fizz);
		} else {
			$("ul").append("<li>" + i+"</li>"); 
			console.log(i);
		}
	}
});