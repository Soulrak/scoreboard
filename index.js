let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let count = 0


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
	count += 1
	guestScore.textContent = count
}

function add2guest() {
	count += 2
	guestScore.textContent = count
}

function add3guest() {
	count += 3
	guestScore.textContent = count
}

function reset() {
	count = 0
	guestScore.textContent = count
	homeScore.textContent = count
}