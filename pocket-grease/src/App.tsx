import React, { useState } from 'react';
import './App.css';

function App() {
  const [years, setYears] = useState(0);
  const [salary, setSalary] = useState(0);
  const [total, setTotal] = useState(0);

  const handleYearsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const years = parseInt(event.target.value);
    handleTotalChange(years, salary);
  }

  const handleSalaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const salary = parseInt(event.target.value);
    handleTotalChange(years, salary);
  }

  const handleTotalChange = (years: number, salary: number) => {
    setYears(years);
    setSalary(salary);
    setTotal(years * salary);
  }

  return (
    <div className="App">
      <p>Pocket Grease</p>
      <p>Age</p>
      Years: <input type="number" value={years} onChange={event => handleYearsChange(event)}></input>
      <p>Income</p>
      Salary: <input type="number" value={salary} onChange={event => handleSalaryChange(event)}></input>
      <p>Total</p>
      {total}
    </div>
  );
}

export default App;
