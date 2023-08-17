import { useState } from "react";
import { data } from "../data";

const useStateArray = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((eachItem) => {
        const { id, name } = eachItem;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button onClick={() => removePerson(id)}>Remove</button>
          </div>
        );
      })}
      <div>
        <button className="btn" onClick={() => setPeople([])}>
          Clear Items
        </button>
      </div>
    </div>
  );
};

export default useStateArray;
