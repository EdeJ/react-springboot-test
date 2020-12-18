import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [clients, setClients] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(`http://localhost:8080/clients`);
        console.log(result);
        setClients(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [])


  return (
    <div className="App">
      <header></header>

    </div>
  );
}

export default App;
