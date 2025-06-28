import React, { useState } from "react";
import "./App.css";
import babyData from "./babyName.json";

function App() {
  const [search, setSearch] = useState("");
  const babyNames = babyData;

  const filteredNames = search
    ? babyNames.filter((baby) => {
        const query = search.toLowerCase().trim();
        return (
          baby.name.toLowerCase().trim().includes(query) ||
          baby.meaning.toLowerCase().trim().includes(query) ||
          baby.origin.toLowerCase().trim().includes(query)
        );
      })
    : [];

  return (
    <div className="container">
      <h1>Baby Name Finder</h1>
      <input
        type="text"
        placeholder="Search by name, meaning, or origin"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="name-list">
        {filteredNames.map((baby, index) => (
          <div key={index} className="card">
            <h2>{baby.name}</h2>
            <p>
              <strong>Meaning:</strong> {baby.meaning}{" "}
              <em>({baby.meaning.charAt(0).toUpperCase()})</em>
            </p>
            <p>
              <strong>Origin:</strong> {baby.origin}{" "}
              <em>({baby.origin.charAt(0).toUpperCase()})</em>
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
