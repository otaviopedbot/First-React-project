import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(true)

    const [name] = useState('joão')

  return (
    <div>
        <h1>isso será exibido?</h1>
        {x && <p>se x for true, sim!</p>}
        {!x && <p>se x for true, sim!</p>}

        {name == 'joão' ? (<div><p>o nome é joão</p></div>) : (<div><p>o nome não encontrado</p></div>)}

    </div>
  )
}

export default ConditionalRender