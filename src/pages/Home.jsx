import Body from '../components/Body';
import { useState } from "react";

const Home = () => {
  // Эксперимент 1 - показываем лучшие предложения в начале
  // const [getExperiment, setExperiment] = useState(Math.floor(Math.random()*2))
  const [getExperiment, setExperiment] = useState(1)

  return <Body expirement={getExperiment}/>;
};

export default Home;
