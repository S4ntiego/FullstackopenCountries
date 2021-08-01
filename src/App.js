import React, { useEffect, useState } from "react";
import getAll from "./services/restCountries";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

function App() {
  const [newSearch, setNewSearch] = useState("");
  const [countries, setCountries] = useState([]);

  const handleSearchChange = event => {
    setNewSearch(event.target.value);
  };

  useEffect(() => {
    getAll().then(response => setCountries(response));
  }, []);

  return (
    <div>
      <Filter
        newSearch={newSearch}
        handleSearchChange={handleSearchChange}
      />
      <Countries countries={countries} newSearch={newSearch} />
    </div>
  );
}

export default App;
