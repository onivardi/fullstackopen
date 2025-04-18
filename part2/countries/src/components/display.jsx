export const Display = ({ countries, searchTerm }) => {
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm)
  );

  if (searchTerm.length === 0) {
    return <p>No matches, specify another filter</p>;
  }

  const countriesLength = filteredCountries.length;
  if (countriesLength > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countriesLength === 1) {
    const country = filteredCountries[0];
    // Get only the values from the languages object to iterate over and display them
    const countryNames = Object.values(country.languages);

    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h3>Languages</h3>
        <ul>
          {countryNames.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      </div>
    );
  }

  return (
    <>
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {filteredCountries.map((country) => (
          <li key={country.cca3}>{country.name.common} </li>
        ))}
      </ul>
    </>
  );
};
