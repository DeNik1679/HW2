import { useState, useEffect } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [save, setSave] = useState([]);

  useEffect(() => {
    const savedInput = localStorage.getItem('inputValue') || '';
    const savedTasks = JSON.parse(localStorage.getItem('save')) || [];
    setInputValue(savedInput);
    setSave(savedTasks);
  }, []);

  const handleChange = () => {
    const updatedTasks = [...save, inputValue];
    setSave(updatedTasks);
    localStorage.setItem('save', JSON.stringify(updatedTasks));
    setInputValue(''); 
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={handleChange}>Add Task</button>
      <ul>
        {save.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;