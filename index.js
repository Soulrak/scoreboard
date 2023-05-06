let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let count = 0
let numbers = 0


function add1home() {
	count += 1
	homeScore.textContent = count
}

function add2home() {
	count += 2
	homeScore.textContent = count
}

function add3home() {
	count += 3
	homeScore.textContent = count
}

function add1guest() {
	numbers += 1
	guestScore.textContent = numbers
}

function add2guest() {
	numbers += 2
	guestScore.textContent = numbers
}

function add3guest() {
	numbers += 3
	guestScore.textContent = numbers
}

function reset() {
	count = 0
	numbers = 0
	homeScore.textContent = count
	guestScore.textContent = numbers
}