function convert() {
	const digi = document.getElementById('digits');
	console.log(digi.value);

	// TODO: Convert Binary to decimal
	// 1011 => ((1 * (2*0)) + (1* (2*1)) + (0 * (2*2)) + (1 * (2*3)))
	//
	//
	let sum = 0;
	let count = 0;
	for (let c = digi.value; c > 0; Math.floor(c / 10)) {
		let k = c % 10;
		c = Math.floor(c / 10);
		sum = sum + k * 2 ** count;
		count++;
	}
	console.log('sum ' + sum);
	document.getElementById('result').innerHTML = sum;
}
