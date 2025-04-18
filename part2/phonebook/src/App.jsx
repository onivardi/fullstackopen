import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import phoneBookService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    phoneBookService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    };

    const nameExists = persons.some((person) => person.name === newName);
    if (nameExists) {
      alert(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      const person = persons.find((person) => person.name === newName);
      const updatedPerson = { ...person, number: personObject.number };
      updatePerson(person.id, updatedPerson);
      return;
    }

    phoneBookService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  const delPerson = (id) => {
    const person = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${person.name} ?`)) {
      phoneBookService.exclude(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  const updatePerson = (id, updatedPerson) => {
    phoneBookService.update(id, updatedPerson).then((returnedPerson) => {
      setPersons(
        persons.map((person) => (person.id !== id ? person : returnedPerson))
      );
      setNewName("");
      setNewNumber("");
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} delPerson={delPerson} />
    </div>
  );
};

export default App;
