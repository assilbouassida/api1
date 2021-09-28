import axios from "axios";
import React, { useState } from 'react'
import "./App.css"

const UserList = () => {

    const [data, setData] = useState( [] )
    const [err, setErr] = useState("No Data Base")
    const [loading, setLoading] = useState(false)

    const handleRetrieve = (e) => {
        e.preventDefault()
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setLoading(true)
                setData(res.data)
            })
            .catch(err => setErr(err))
    }

    const handleDelete = (e) => {
        e.preventDefault()
        setData( [] )
    }

    const result = (loading) ? 
        <table>
            <tbody>
                {data.map(item => {
                    return <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                    </tr>
                })}
            </tbody>
        </table>
        : <div>{err}</div>

    return (
        <div className="container">
            <button className="button button1" onClick={handleRetrieve}>Retrieve Data Base</button>
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
            </table>
            <div>{result}</div>
            <button className="button button2" onClick={handleDelete}>Delete Data Base</button>
        </div>
    )
}

export default UserList
