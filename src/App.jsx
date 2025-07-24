import './App.css'
import {Routes, Route} from 'react-router-dom'
import FormPage from './FormPage'
import SuccessPage from './SuccessPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<FormPage />}></Route>
        <Route path='/successpage' element={<SuccessPage />}></Route>
      </Routes>
    </>
  )
}

export default App
