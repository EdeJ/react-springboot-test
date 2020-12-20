import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import AddClientForm from './components/AddClientForm';
import DatabaseView from './components/DatabaseView';

function App() {

  const [clients, setClients] = useState(null);


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

  async function addClient(client) {
    try {
      const result = await axios.post(`http://localhost:8080/clients`, client);
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
          <AddClientForm addClient={addClient} />
          <DatabaseView clients={clients} />
        </div>
      }
    </div>
  )
}

export default App;
