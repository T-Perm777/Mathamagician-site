document.addEventListener("DOMContentLoaded", function() {
	const button9 = document.getElementById("9");
	const button8 = document.getElementById("8");
	const button7 = document.getElementById("7");
	const button6 = document.getElementById("6");
	const button5 = document.getElementById("5");
	const button4 = document.getElementById("4");
	const button3 = document.getElementById("3");
	const button2 = document.getElementById("2");
	const button1 = document.getElementById("1");
	const button0 = document.getElementById("0");
	const buttonDivide = document.getElementById("divide");
	const buttonMultiply = document.getElementById("multiply");
	const buttonSubtract = document.getElementById("subtract");
	const buttonAdd = document.getElementById("add");
	const buttonDot = document.getElementById("dot");
	const buttonClear = document.getElementById("clear");
	const buttonEnter = document.getElementById("enter");
	const screen = document.getElementById("screen");
	const resultOut = document.getElementById("result");
	button9.addEventListener("click", function() {
		screen.value += 9;
	});
	button8.addEventListener("click", function() {
		screen.value += 8;
	});
	button7.addEventListener("click", function() {
		screen.value += 7;
	});
	button6.addEventListener("click", function() {
		screen.value += 6;
	});
	button5.addEventListener("click", function() {
		screen.value += 5;
	});
	button4.addEventListener("click", function() {
		screen.value += 4;
	});
	button3.addEventListener("click", function() {
		screen.value += 3;
	});
	button2.addEventListener("click", function() {
		screen.value += 2;
	});
	button1.addEventListener("click", function() {
		screen.value += 1;
	});
	button0.addEventListener("click", function() {
		screen.value += 0;
	});
	buttonDivide.addEventListener("click", function() {
		screen.value += "/";
	});
	buttonMultiply.addEventListener("click", function() {
		screen.value += "*";
	});
	buttonSubtract.addEventListener("click", function() {
		screen.value += "-";
	});
	buttonAdd.addEventListener("click", function() {
		screen.value += "+";
	});
	buttonEnter.addEventListener("click", function() {
		try {
			const result = eval(screen.value);
			resultOut.textContent = "Result of " + screen.value + " is " + result;
			screen.value = result;
		} catch (error) {
			screen.value = "Error: " + error.message;
		}
	});
	buttonClear.addEventListener("click", function() {
		screen.value = "";
		resultOut.textContent = "";
	});
});
