import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [clients, setClients] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [clientNr, setClientNr] = useState('');

  useEffect(() => {
    getAllClients();
  }, [])

  async function getAllClients() {
    try {
      const result = await axios.get(`http://localhost:8080/clients`);
      setClients(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function addClient(evt) {
    evt.preventDefault();
    try {
      const result = await axios.post(`http://localhost:8080/clients`,
        {
          firstName,  // <- dit is hetzelfde als    firstName: firstName
          lastName,
          clientNr
        });
      console.log(result);
      getAllClients();
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteClient(id) {
    try {
      const result = await axios.delete(`http://localhost:8080/clients/${id}`);
      console.log(result);
      getAllClients();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="app">
      {clients &&
        <div>
          <h2>Alle klanten</h2>
          <div className="client-container">
            {clients && clients.map((client, index) => (
              <ul key={client.id} className="client-list">
                <li>id: {client.id}</li>
                <li>Voornaam: {client.firstName}</li>
                <li>Achternaam: {client.lastName}</li>
                <li>Klantnummer: {client.clientNr}</li>
                <li>
                  <button
                    onClick={() => deleteClient(client.id)}
                    type="submit"
                  >
                    verwijder klant
                      </button>
                </li>
              </ul>
            ))
            }
          </div>
          <form onSubmit={(evt) => addClient(evt)} className="add-client">
            <label>Vooraam: </label>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            <label>Achternaam: </label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            <label>Klantnummer: </label>
            <input type="text" onChange={(e) => setClientNr(e.target.value)} value={clientNr} />
            <button type="submit">klant toevoegen</button>
          </form>
        </div>
      }
    </div>
  )
}

export default App;
