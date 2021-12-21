import React, {useState} from 'react';

import data from "./data.json";

function App() {
  const [parti, setParti] = useState(data);
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addParti(userInput)
    setUserInput("")
  }

  const addParti = (userInput) => {
    let copy = [...parti];
    copy = [...copy, {id: parti.length + 1, name: userInput}];
    setParti(copy)
  }
  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input value={userInput} type="text" onChange={handleChange} placeholder="Enter entry"/>
          <button>Add</button>
        </form>
        <ol>
          {parti.map((parti) => {
            return<li key={parti.id}>{parti.name}</li>;
          })}

        </ol>
      </div>
  );
}

export default App;
