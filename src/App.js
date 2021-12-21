import React, {useState} from 'react';
function App() {
    const initialParticipants=[
      "Dylan","Kaitlyn", "Deion",
    ];
    const [parti, setParti] = useState(initialParticipants);
  return (
      <div>
        <ol>
          {parti.map((parti) => {
            return<li key={parti}>{parti}</li>;
          })}

        </ol>
      </div>
  );
}

export default App;
