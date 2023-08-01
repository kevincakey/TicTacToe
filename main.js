var test1 = document.getElementsByClassName('one');
test1.addEventListener("click", function1);

function function1() {
	document.getElementsByClassName('one').innerHTML = "x";
}