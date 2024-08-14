import axios from "axios"
import { AppBar } from "../components/AppBar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title,setTitle] = useState("");
    const [content, setContent] = useState("")
    const navigate = useNavigate();
    return (
        <div>
            <AppBar/>
            <div className="flex justify-center w-full">
                <div className="max-w-screen-sm w-full pt-10">
                    <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Title
                    </label>
                    <input type="text" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Enter the title" onChange={(e) => setTitle(e.target.value)}/>

                    
                    <label htmlFor="message" className="block mb-2 mt-10 text-sm font-medium text-gray-900 dark:text-white">
                        Content</label>
                    <textarea id="message" rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="Write your blog content here..." onChange={(e) => setContent(e.target.value)}>
                    </textarea>

                    <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    onClick={async() => {
                        const response = await axios.post(`${BACKEND_URL}/api/v1/blog/blogPost`, {
                            title,
                            content
                        },
                        {
                            headers: {
                                Authorization : localStorage.getItem("token")
                            }
                        }

                        )
                        navigate(`/blog/${response.data.id}`)
                    }}>
                        Publish blog
                    </button>

                </div>
            </div>
        </div>
    )
}