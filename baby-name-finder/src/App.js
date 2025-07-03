import React, { useState } from "react";
import "./App.css";
import babyData from "./babyName.json";

function App() {
  const [search, setSearch] = useState("");
  const babyNames = babyData;

  const filteredNames = search
    ? babyNames.filter((baby) => {
        const query = search.toLowerCase().trim();
        return baby.name.toLowerCase().startsWith(query);
      })
    : [];

  return (
    <div className="container">
      <h1>Baby Name Finder</h1>

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
            <p>
              <strong>Meaning:</strong> {baby.meaning}
            </p>
            <p>
              <strong>Origin:</strong> {baby.origin}
            </p>
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
