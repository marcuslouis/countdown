import React, { useState, useEffect } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);
	const [count3, setCount3] = useState(0);
	const [count4, setCount4] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setCount((count) => count + 1);
		}, 1000);
		// setInterval(() => {
		// 	setCount2((count2) => count2 + 1);
		// }, 10);
		// setInterval(() => {
		// 	setCount3((count3) => count3 + 1);
		// }, 100);
		// setInterval(() => {
		// 	setCount4((count4) => count4 + 1);
		// }, 1000);
	}, []);

	// if (count === 10) {
	// 	setCount(0);
	// }
	// if (count2 === 10) {
	// 	setCount2(0);
	// }
	// if (count3 === 10) {
	// 	setCount3(0);
	// }
	// if (count4 === 10) {
	// 	setCount4(0);
	// }
	let m = {
		marginInline: "727px",
	};
	let f = Math.floor(count / 1000);
	let k = Math.floor(count / 100);
	let q = Math.floor(count / 10);
	let o = Math.floor(count / 1);
	return (
		<div>
			<div class="card-body" style={m}>
				<h1 class="card-title">Timer</h1>
				<h2>{f % 10}</h2>
				<h2>{k % 10}</h2>
				<h2>{q % 10}</h2>
				<h2>{o % 10}</h2>
				<p class="card-text"></p>
			</div>
		</div>
	);
};

export default Home;
