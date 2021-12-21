import React, {useState} from 'react';
function App() {
    const initialParticipants=[
      "Dylan","Kaitlyn", "Deion",
    ];
    const [parti, setParti] = useState(initialParticipants);
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }
  return (
      <div>
        <input value={userInput} type="text" onChange={handleChange} placeholder="Enter entry"/>
        <button>Add</button>
        <ol>
          {parti.map((parti) => {
            return<li key={parti}>{parti}</li>;
          })}

        </ol>
      </div>
  );
}

export default App;
