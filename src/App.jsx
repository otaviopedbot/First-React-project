// images
import City from './assets/city.jpg'

// styles
import './App.css'

// components

import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import { useState } from 'react'
import Container from './components/Container'
import ExecFunction from './components/ExecFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import Myform from './components/Myform'


function App() {

  const name = "Carlinhos"
  const [username] = useState('Maria')

  const cars = [
    {id:1, brand:'ferrari', color:"yellow", km:0},
    {id:2, brand:'ford', color:"bllue", km:0},
    {id:3, brand:'vw', color:"white", km:0},
  ]

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className='App'>
      <FirstComponent />
      <MyComponent />
      <TemplateExpressions />
      <h1>Hello world React</h1>
      <Events />

      {/* imagem em public */}
      <div>
        <img src="/campo.jpg" alt='campo'/>
      </div>

      {/* imagem em assets */}
      <div>
        <img src={City} alt='cidade' />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* props */}
      <ShowUserName name={name} />

      {/* destructuring */}
      <CarDetails brand='vw' km={1000} color='black' />

      {/* reaproveitando */}
      <CarDetails brand='gm' km={6000} color='white' />
      <CarDetails brand='fiat' km={1500} color='blue' />

      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} />
      ))}

      {/* fragment */}
      <Fragment />

      {/* children */}
      <Container>este é o conteudo</Container>

      {/* executar função */}
      <ExecFunction myFunction={showMessage} />

      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />


      {/* formularios */}
      <h2>Formularios:</h2>

      <Myform />




    </div>
  )
}

export default App
