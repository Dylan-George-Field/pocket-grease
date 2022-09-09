import React, { useState } from 'react';
import './App.css';

function App() {
  const [years, setYears] = useState(0);
  const [salary, setSalary] = useState(0)

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  }

  return (
    <div className="App">
      <p>Pocket Grease</p>
      <form onSubmit={handleSubmit}>
          <p>Age</p>
          Years: <input type="number" value={years} onChange={event => setYears(parseInt(event.target.value))}></input>
          <p>Income</p>
          Salary: <input type="number" value={salary} onChange={event => setSalary(parseInt(event.target.value))}></input>
        <p>
          <input type="submit" />
        </p>
      </form>
      <div>
        <div>
          <p>Total</p>
          {years * salary}
        </div>
      </div>

    </div>
  );
}

export default App;
