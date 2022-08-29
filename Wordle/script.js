let pos = 0
let accept = true

function isLetter(str) {
	return str.length === 1 && str.match(/[a-z]/i);
}

document.addEventListener('keydown', function (event) {
	let key = event.key
	if (key === "Enter" && accept == false) {
		accept = true;
		pos++;
	}
	if (accept) {
		if (key === "Backspace") {
			if (pos % 5 === 0) return;
			else {
				pos--;
				if (pos < 0) pos = 0;
				document.querySelector(`div[index="${pos}"]`).textContent = ""
			}
		}
		else if (isLetter(key)) {
			if (pos !== 0 && ((pos + 5) % 5 === 0)) return
			document.querySelector(`div[index="${pos}"]`).textContent = key.toUpperCase()
			pos++;
		}
	}
})