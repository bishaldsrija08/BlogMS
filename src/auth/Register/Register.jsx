import axios from "axios";
import Form from "../Component/Form";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../config";

const Register = () => {

  const navigate = useNavigate()
  const handleRegister = async (data) => {
    try {
      await axios.post(`${baseUrl}/register`, data)
      navigate('/login')
    } catch (error) {
      alert(error?.response?.data?.message)
    }
  }
  return (
    <>
      <Form type="Register" onSubmit={handleRegister} />
    </>
  );
};

export default Register;

//https://react30.onrender.com/