export const Person = ({ person, delPerson }) => {
  return (
    <>
      {person.name} {person.number} {""}
      <button type="submit" onClick={() => delPerson(person.id)}>
        delete
      </button>
    </>
  );
};
