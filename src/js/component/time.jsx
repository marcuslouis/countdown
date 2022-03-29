import propTypes from "prop-types";
import React, { useState, useEffect } from "react";

const Time = (props) => {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);
	const [count3, setCount3] = useState(0);
	const [count4, setCount4] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setCount((count) => count + 1);
		}, 1000);
	}, []);

	let m = {
		margin: "0 auto",
		backgroundColor: "black",
		width: "2000px",
		color: "white",
	};
	let f = Math.floor(count / props.count);

	return (
		<span class="text-center" style={m}>
			{f % 10}
		</span>
	);
};
Time.PropTypes = {
	count: propTypes.number,
};
export default Time;
