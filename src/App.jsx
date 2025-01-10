
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Blog/Home/Home'
import Register from './auth/Register/Register'
import Login from './auth/Login/Login'
import Create from './Blog/Create/Create'
function App() {

  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='register' element={<Register/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='create' element={<Create/>}/>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
