import { useState} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const [name, setName] = useState("Anna");
  const {data: blogs, isPending,error} = useFetch("http://localhost:8000/blogs");

  const handleClickPer = () => {
    setName("Per");
  };
  const handleClickOla = () => {
    setName("Ola");
  };



  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
        />
      )}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "Marina")}
          title="Marinas Blogs!"
        />
      )}
      <button onClick={handleClickPer}>Change to Per</button>
      <button onClick={handleClickOla}>Change to Ola</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
