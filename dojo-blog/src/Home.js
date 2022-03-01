const Home = () => {

  const handleClick = (e) => {
    console.log('Hei, ' + e);

  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={() => handleClick('Anna')}>Click me</button>
    </div>
   );
}

export default Home;