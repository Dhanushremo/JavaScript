// App.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Register />
      {/* <TrainSearch /> Uncomment this to test Train Search page */}
    </>
  );
}

// ---------------------------
// ✅ 1. Train Search Component
function TrainSearch() {
  const [train, setTrain] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime") // public API used for mock data
      .then(res => res.json())
      .then(data => setTrain(data.data))
      .catch(err => console.log("API Error", err));
  }, []);

  const filtered = train.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="train-search-container">
      <h2>Search Trains (Mock)</h2>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search by train name"
      />
      <ul>
        {filtered.map(t => (
          <li key={t.mal_id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}

// ---------------------------
// ✅ 2. Register Component (Fixed)
function Register() {
  const [user, setUser] = useState({
    UserName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Replace with actual backend endpoint
      await axios.post("http://localhost:5000/register", user);
      alert("Success!");
      setUser({ UserName: '', email: '', password: '' });
    } catch (error) {
      alert("Not Success");
      console.error(error);
    }
  };

  return (
    <>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="UserName"
          value={user.UserName}
          onChange={handleChange}
          placeholder="Username"
        /><br />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
        /><br />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
        /><br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default App;
