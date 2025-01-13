import axios from "axios"
import Layout from "../../components/Layout/Layout"
import Form from "../components/form/Form"
import { baseUrl } from "../../config"
import { useNavigate } from "react-router-dom"

const Create = () => {
  const navigate = useNavigate()
  const onAddBlog = async (data) => {

    const response = axios.post(`${baseUrl}/blog`, data, {
      headers: { 
        "Content-Type": "multipart/form-data", //form pathauda
        "Authorization": localStorage.getItem('token') // verification authorization!!
      }
    }
    )
    // console.log(response)
    if (response.status === 201) {
      navigate("/")
    }else{
      alert("Something went wrong!")
    }
  }
  return (
    <Layout>
      <Form type="Create" onSubmit={onAddBlog} />
    </Layout>
  )
}
export default Create