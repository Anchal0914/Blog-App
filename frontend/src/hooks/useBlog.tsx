import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface Blogg {
    "content": string;
    "title": string;
    "id": number;
    "author": {
        "name": string
    }

}

export const useBlog = ({id} : {id: string}) => {
    const [loading, setLoading] = useState(true);
    const[blog,setBlog] = useState<Blogg>();

    useEffect(()=> {
        axios.get(`${BACKEND_URL}/api/v1/blog/getBlog/${id}`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
        )
        .then(response => {
            setBlog(response.data.blog)
            setLoading(false)
        })
    },[id])

    return {loading,blog}
}