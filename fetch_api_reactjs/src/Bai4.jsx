import { useEffect, useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    const result = posts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, posts]);

  return (
    <div>
      <h2>Post List</h2>
      <input type="text" placeholder="Search title..." value={search} onChange={(e) => setSearch(e.target.value)}/>
      {filtered.map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}