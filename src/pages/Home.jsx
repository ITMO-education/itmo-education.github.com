import Body from '../components/Body';
import { useState } from "react";

const experimentId = "ya-da-experiment"

const Home = () => {
	let exp = localStorage.getItem(experimentId)
	if (!exp) {
		exp = Math.floor(Math.random() * 3).toString()
		localStorage.setItem(experimentId, exp)
	}
	// Эксперимент 1 - показываем лучшие предложения в начале
	const [getExperiment] = useState(exp)
	// const [getExperiment, setExperiment] = useState(1)

	const startTime = Date.now()
	localStorage.setItem('startTime', startTime.toString())

	window.onbeforeunload = function(){
		localStorage.removeItem('startTime')
	};

	return <Body expirement={getExperiment}/>;
};

export default Home;
