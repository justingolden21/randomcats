let output, catData;

window.onload = function() {
	output = document.getElementById("output");
	getFact();
}

//https://catfact.ninja/fact
//https://cat-fact.herokuapp.com/facts

//https://github.com/vadimdemedes/cat-facts/blob/master/cat-facts.json
$.getJSON('facts.json', function(data) {
	catData = data;
});

function getFact() {
	output.innerHTML = catData[Math.floor(Math.random()*catData.length)];
}

function copyFact() {
	let range = document.createRange();
	let selection = window.getSelection();
	range.selectNodeContents(output);
	selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand("copy");
}