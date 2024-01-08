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


function App() {

  const name = "Carlinhos"


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

    </div>
  )
}

export default App
