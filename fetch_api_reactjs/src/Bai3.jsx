import { useEffect, useState } from "react";

export default function UserDetail() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
  if (!userId) {
    setUser(null);
    setError("");
    return;
  }
  const id = Number(userId);
  if (id < 1 || id > 10) {
    setError("User not found");
    setUser(null);
    return;
  }
  setError("");
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(data => setUser(data))
    .catch(() => setError("Error fetching data"));
  }, [userId]);

  return (
    <div>
      <h2>Search User</h2>
      <input type="number" placeholder="Enter userId" value={userId} onChange={(e) => setUserId(e.target.value)}/>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
    </div>
  );
}