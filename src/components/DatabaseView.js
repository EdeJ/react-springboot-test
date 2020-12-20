import React from 'react'

function DatabaseView({ clients }) {

    return (
        <>
            <h3>Je database ziet er nu zo uit:</h3>
            <p>SELECT * FROM CLIENTS;</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th><th>CLIENT_NR</th><th>FIRST_NAME</th><th>LAST_NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client) => (
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.clientNr}</td>
                            <td>{client.firstName}</td>
                            <td>{client.lastName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default DatabaseView
