import { useState, useEffect } from "react";
import BlogList from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [name, setName] = useState("Anna");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const handleClickPer = () => {
    setName("Per");
  };

  const handleClickOla = () => {
    setName("Ola");
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if(!res.ok) {
            throw Error('Could not fetch data for that resource')
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          handleDelete={handleDelete}
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
