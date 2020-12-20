import React from 'react'

function DatabaseView({ clients }) {

    return (
        <>
            <h2>Je database ziet er nu zo uit:</h2>
            <p>SELECT * FROM CLIENTS;</p>
            <table>
                <tr>
                    <th>ID</th><th>CLIENT_NR</th><th>FIRST_NAME</th><th>LAST_NAME</th>
                </tr>
                {clients.map((client) => (
                    <tr>
                        <td>{client.id}</td>
                        <td>{client.clientNr}</td>
                        <td>{client.firstName}</td>
                        <td>{client.lastName}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default DatabaseView
