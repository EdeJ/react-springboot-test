import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import AddClientForm from './components/AddClientForm';
import DatabaseView from './components/DatabaseView';
import Client from './components/Client';
import UpdateClient from './components/UpdateClient';

function App() {

  const [clients, setClients] = useState([]);
  const [updateId, setUpdateId] = useState(null);

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

  async function updateClient(client) {
    try {
      const result = await axios.put(`http://localhost:8080/clients/${client.id}`, client);
      console.log(result);
      setUpdateId(null);
      getAllClients();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="app">
      {(clients && !updateId) ? (
        <div>
          <h2>Alle klanten</h2>
          <div className="client-container">
            {clients && clients.map((client, index) => (
              <Client
                key={client.id}
                client={client}
                deleteClient={deleteClient}
                setUpdateId={setUpdateId}
                index={index}
              />
            ))
            }
          </div>
          <AddClientForm addClient={addClient} />
          <DatabaseView clients={clients} />
        </div>
      ) : (
          updateId && (
            <UpdateClient
              client={clients[clients.findIndex(x => x.id === updateId)]}
              updateClient={updateClient}
              setUpdateId={setUpdateId}
            />
          )
        )
      }
    </div>
  )
}

export default App;
