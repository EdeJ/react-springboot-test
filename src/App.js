import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [clients, setClients] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [clientNr, setClientNr] = useState('');
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        const result = await axios.get(`http://localhost:8080/clients`);
        console.log(result.data);
        setClients(result.data);
        setRefresh(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [refresh])

  async function postClient(newClient) {
    try {
      const result = await axios.post(`http://localhost:8080/clients`,
        newClient
      );
      console.log(result);
      setRefresh(true);
    } catch (error) {
      console.error(error);
    }
  }

  const createClient = (evt) => {
    evt.preventDefault();
    console.log(firstName);
    const newClient = {
      firstName,
      lastName,
      clientNr
    }
    postClient(newClient);
  }


  return (
    <div className="App">
      <h2>Alle klanten</h2>
      {clients && clients.map((client) => (
        <ul key={client.id}>
          <li>id: {client.id}</li>
          <li>Voornaam: {client.firstName}</li>
          <li>Achternaam: {client.lastName}</li>
          <li>Klantnummer: {client.clientNr}</li>
        </ul>
      ))
      }
      <form onSubmit={(evt) => createClient(evt)}>
        <label>Vooraam: </label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
        <label>Achternaam: </label>
        <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
        <label>Klantnummer: </label>
        <input type="text" onChange={(e) => setClientNr(e.target.value)} value={clientNr} />
        <button type="submit">klant toevoegen</button>
      </form>
    </div>
  );
}

export default App;
