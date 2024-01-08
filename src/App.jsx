// components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'

// styles
import './App.css'
import MyComponent from './components/MyComponent'
import Events from './components/Events'


function App() {
  return (
    <div className='App'>
      <FirstComponent />
      <MyComponent />
      <TemplateExpressions />
      <h1>Hello world React</h1>
      <Events />
    </div>
  )
}

export default App
