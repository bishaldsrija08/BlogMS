import { useEffect, useState } from "react"
import Layout from "../../components/Layout/Layout"
import Card from "../components/card/Card"
import axios from "axios"
import { baseUrl } from "../../config"

const Home = () => {
  const [blogs, setBlogs]=useState([])
  
const fetchBlogs = async ()=>{
  const response = await axios.get(`${baseUrl}/blog`)
  if(response.status===200){
    // console.log(response.data.data)
    setBlogs(response.data.data)
  }
}

useEffect(()=>{
    fetchBlogs()
    
  }, [])
  return (
    <>
      <Layout>
      <div className="flex flex-wrap justify-center">
      {blogs.length>=0 && blogs.map((blog)=>{
        return(
          <Card show={blog}/>
        )
      })}
      </div>
      </Layout>
    </>
  )
}

export default Home
