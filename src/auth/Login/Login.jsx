import { useNavigate } from "react-router-dom"
import Form from "../Component/Form"
import axios from "axios"

const Login = () => {
  const navigate = useNavigate()
  const handleLogin = async (data) => {
    try {
      await axios.post("https://react30.onrender.com/api/user/login", data)
      navigate('/')
    } catch (error) {
      alert(error?.response?.data?.message)
    }
  }
  return (
    <>
      <Form type="Login" onSubmit={handleLogin} />
    </>
  )
}

export default Login
