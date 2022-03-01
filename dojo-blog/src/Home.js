import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Per");

  const handleClickLuigi = () => {
    setName("Luigi");
  };

  const handleClickPer = () => {
    setName("Per");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>Hei {name}!</p>
      <button onClick={handleClickLuigi}>Change to Luigi</button>
      <button onClick={handleClickPer}>Change to Per</button>
    </div>
  );
};

export default Home;
