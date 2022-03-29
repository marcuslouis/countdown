import React from "react";
import Time from "./time.jsx";
// const [light, setlight] = useState(0);
//include images into your bundle

//create your first component
const Home = () => {
	let m = {
		margin: "0 auto",
		backgroundColor: "black",
		width: "2000px",
		color: "white",
		fontSize: "50px",
	};
	return (
		<div class="text-center" style={m}>
			<Time count={1000} />
			<Time count={100} />
			<Time count={10} />
			<Time count={1} />
		</div>
	);
};

export default Home;
