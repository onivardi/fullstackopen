import { useEffect, useState } from "react";
import GetAllCountries from "./services/countries";
import { Search } from "./components/search";
import { Display } from "./components/display";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetAllCountries();
        setCountries(response);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <Display countries={countries} searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default App;
