import { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout'
import Form from '../components/form/Form'
import { data, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../config';

const Update = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  //update blog function
  const updateBlog = ()=>{

  }

//Fetch single blog.
const fetchSingleBlog = async () => {
  try {
    const response = await axios.get(`${baseUrl}/blog/${id}`);
    console.log(response.data.data)
    setBlog(response.data.data);
  } catch (error) {
    alert(error);
  }
};

//first time load huda
useEffect(() => {
  fetchSingleBlog();
}, []);

  return (
    <>
      <Layout>
        <Form type="Edit" oldData={blog} onUpdate={updateBlog}/>
      </Layout>
    </>
  )
}

export default Update
