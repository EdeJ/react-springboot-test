import React from 'react'

function Client({ client, deleteClient }) {
    return (
        <ul key={client.id}
            className="client-list"
        >
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
    )
}

export default Client
