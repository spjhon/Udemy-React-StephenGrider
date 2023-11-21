import reactLogo from './assets/react.svg'
import CarForm from './components/CarForm'
import CarList from './components/CarList'
import CarSearch from './components/CarSearch'
import CarValue from './components/CarValue'

function App() {
  return (
    <div className='container is-fluid'>
      <CarForm></CarForm>
      <CarSearch></CarSearch>
      <CarList></CarList>
      <CarValue></CarValue>
    </div>
  )
}

export default App
