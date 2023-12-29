import { useEffect, useState } from "react";
import "./App.css";
import Paginate from "./components/paginate";
function App() {
  const [allposts, setAllPosts] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState([]);
  useEffect(() => {
    const fetchPosts = () => {
      fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setAllPosts(data.posts);
          setPostsPerPage(data.posts.slice(0, 5));
        });
    };
    fetchPosts();
  }, []);
  const handlePostsperpage = (pageNumbers) => {
    setPostsPerPage(allposts.slice(pageNumbers * 5 - 5, pageNumbers * 5));
  };

  return (
    <>
      <h1 className="m-4">Post Titles</h1>
      <div className="container ">
        {postsPerPage.map((items) => (
          <li key={items.id} className="post">
            {items.title}
          </li>
        ))}
        <Paginate allposts={allposts} handlePostsperpage={handlePostsperpage} />
      </div>
    </>
  );
}

export default App;
