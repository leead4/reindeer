console.log("hello");

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");
console.log(colors);

	for (var i = 0; i < reindeer.length; i++) {
	 hohohoElement.innerHTML = hohohoElement.innerHTML + colors[i] + " " + reindeer[i] + "<br>";
	};

/*
	var addToDOM = document.getElementById("demo");
addToDOM.innerHTML = "Hi There, Nss ninja";
/*
var hohohoElement = document.getElementById("coloredReindeer");s


	//	for (var j = 0; j < reindeer.length; j++) {
	 jingleBells.push(colors[i] + reindeer[j]); 
	  console.log(jingleBells); 
}
};
*/


