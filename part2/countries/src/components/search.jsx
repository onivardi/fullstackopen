export const Search = ({ searchTerm, setSearchTerm }) => {
  const handleSearchTermChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
  };

  return (
    <>
      <div>
        find countries{" "}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </>
  );
};
