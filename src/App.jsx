
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Blog/Home/Home'
import Register from './auth/Register/Register'
import Login from './auth/Login/Login'
import Create from './Blog/Create/Create'
import Update from './Blog/update/Update'
import Single from './Blog/ReadSingle/Single'
function App() {

  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='register' element={<Register/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='blog/create' element={<Create/>}/>
    <Route path='blog/update/:id' element={<Update/>}/>
    <Route path='blog/:id' element={<Single/>}/>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
