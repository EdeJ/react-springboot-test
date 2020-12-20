import React, { useState } from 'react'

function UpdateClient({ client, updateClient, setUpdateId }) {

    const [firstName, setFirstName] = useState(client.firstName);
    const [lastName, setLastName] = useState(client.lastName);
    const [clientNr, setClientNr] = useState(client.clientNr);


    return (
        <div className="update-container">
            <form onSubmit={e => {
                e.preventDefault();
                updateClient({
                    id: client.id,
                    firstName,
                    lastName,
                    clientNr
                })
            }}
                className="update-client">
                <h3>Update kalnt</h3>
                <button onClick={() => setUpdateId(0)} type="button" className="close">X</button>
                <label>id: </label>
                <input type="text" readOnly value={client.id} />
                <label>Vooraam: </label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                <label>Achternaam: </label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                <label>Klantnummer: </label>
                <input type="text" onChange={(e) => setClientNr(e.target.value)} value={clientNr} />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default UpdateClient
