import { useState } from "react";

const ManageData = () => {

    let someData = 10;

    console.log(someData)

    const [number, setNumber] = useState(15);

    console.log(number)

    return (
        <>
            <div>
                <p>valor: {someData}</p>
                <button onClick={() => (someData = 15)}>Mudar variavel</button>
            </div>
            <div>
                <p>valor: {number}</p>
                <button onClick={() => setNumber(25)}>Mudar state</button>
            </div>
        </>

    )
}

export default ManageData