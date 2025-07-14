// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import babyData from "./babyName.json";
import { auth } from "./Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "./login";

function App() {
  const [search, setSearch] = useState("");
  const [names] = useState(babyData);
  const [user, setUser] = useState(null);

  const filteredNames = search
    ? names.filter((baby) => {
        const query = search.toLowerCase().trim();
        return (
          baby.name.toLowerCase().startsWith(query) ||
          baby.origin.toLowerCase().startsWith(query)
        );
      })
    : [];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={() => setUser(auth.currentUser)} />;
  }

  return (
    <div className="container">
      <h1>Baby Name Finder</h1>
      <button onClick={handleLogout} style={{ float: "right" }}>Logout</button>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by first letter"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="name-list">
        {filteredNames.map((baby, index) => (
          <div key={index} className="card">
            <h2>{baby.name}</h2>
            <p><strong>Meaning:</strong> {baby.meaning}</p>
            <p><strong>Origin:</strong> {baby.origin}</p>
          </div>
        ))}
        {filteredNames.length === 0 && search && (
          <p>No matching names found.</p>
        )}
      </div>
    </div>
  );
}

export default App;


//abc@gmail.com
//Abc@abc