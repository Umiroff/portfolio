import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'

function App() {
  
  return (
    <>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
