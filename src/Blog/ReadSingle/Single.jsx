import { Link, useNavigate, useParams } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
import { baseUrl } from "../../config";
import axios from "axios";
import { useEffect, useState } from "react";

const Single = (oldData) => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const Navigate = useNavigate()

    const deleteBlog = ()=>{
       const response = axios.delete((`${baseUrl}/blog/${id}`), {
            headers:{
                "Authorization": localStorage.getItem('token') // verification authorization!!
            }
        })
        if(response.statues === 200){
            Navigate('/')
        }else{
            alert("Something went wrong!")
        }
    }

    const fetchSingleBlog = async () => {
        try {
          const response = await axios.get(`${baseUrl}/blog/${id}`);
         // console.log(response.data.data)
          setBlog(response.data.data);
        } catch (error) {
          alert(error);
        }
      };
      useEffect(() => {
        fetchSingleBlog();
      }, []);

    return (
        <>
            <Layout>
                <div className="bg-gray-100 dark:bg-gray-800 py-8 h-screen">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row -mx-4">
                            <div className="md:flex-1 px-4">
                                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                    <img className="w-full h-full object-cover" src={blog.imageUrl} alt="Product Image" />
                                </div>
                                <div className="flex -mx-2 mb-4">
                                    <div className="w-1/2 px-2">
                                       
                                            <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={deleteBlog}>Delete</button>
                                        
                                    </div>
                                    <div className="w-1/2 px-2">
                                        <Link to={`/blog/update/${blog._id}`}>
                                            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Edit</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex-1 px-4">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{blog.title}</h2>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {blog.subtitle}</p>
                                <div className="flex mb-4">
                                    <div className="mr-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Category: </span>
                                        <span className="text-gray-600 dark:text-gray-300">{blog.category}</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Published at: </span>
                                        <span className="text-gray-600 dark:text-gray-300">no time</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Description:</span>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{blog.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Single