import { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["matheus", "pedro", "Eduardo Costa"])

    const [users, setUsers] = useState([
        { id: 1, name: "otavio", age: 19 },
        { id: 2, name: "carlos", age: 19 },
        { id: 3, name: "Eduardo Costa", age: 19 },
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <button onClick={deleteRandom} >Delete randon user</button>
        </div>
    )
}

export default ListRender