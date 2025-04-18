import { Person } from "./Person";

export const Persons = ({ persons, filter, delPerson }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredPersons.map((person, index) => (
        <li key={index}>
          <Person person={person} delPerson={delPerson} />
        </li>
      ))}
    </ul>
  );
};
