function holiday(data) {
	console.log("Papers check...");
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			if (data.country === "RUS" && data.passport === 0000) { resolve("Data correct"); }
			else { reject("Data incorrect"); }
		}, 2000);
	});
}
function visa(data) {
	console.log(data);
	console.log("Getting visa...")
	return new Promise((resolve, reject) => { setTimeout(() => { Math.random() > .5 ? resolve("You may proceed") : reject("Passage denied") }, 2000) });
}
function hotel(visa) {
	console.log(visa);
	console.log("Serving hotel...");
	return new Promise((resolve, reject) => { setTimeout(() => { Math.random() > .5 ? resolve("Hotel served") : reject("No free rooms") }, 2000) });
}
function ticket(booking) {
	console.log(booking);
	console.log("Looking for tickets...");
	return new Promise((resolve, reject) => { setTimeout(() => { Math.random() > .5 ? resolve("Tickets arrived") : reject("Low funds"); }, 2000) });
}
function end(booked) {
	console.log(booked);
	console.log("Welcome to Arstotzka!");
}
let data = {
	country: "RUS",
	passport: 0000,
};

holiday(data)
	.then(visa)
	.then(hotel)
	.then(ticket)
	.then(end)
	.catch(error => console.log(error));