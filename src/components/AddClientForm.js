import React, { useState } from 'react'

function AddClientForm({ addClient }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [clientNr, setClientNr] = useState('');

    return (
        <form onSubmit={e => {
            e.preventDefault();
            addClient({
                firstName,
                lastName,
                clientNr
            })
        }}
            className="add-client"
        >
            <label>Vooraam: </label>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            <label>Achternaam: </label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            <label>Klantnummer: </label>
            <input type="text" onChange={(e) => setClientNr(e.target.value)} value={clientNr} />
            <button type="submit">klant toevoegen</button>
        </form>
    )
}

export default AddClientForm
