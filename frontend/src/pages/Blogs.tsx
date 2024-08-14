/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks/useBlogs";

export function Blogs () {
    const {loading,blogs} = useBlogs();
    return (
        <div>
        {loading ? <div> <AppBar/> <BlogSkeleton/> <BlogSkeleton/> <BlogSkeleton/> </div>:
      
        <div>
            
            <AppBar/>
            <div className="flex justify-center">
                <div>
                    {blogs.map (blog => <BlogCard 
                    title={blog.title}
                    content={blog.content}
                    publishedDate="12 July 2024" 
                    authorName={blog.author.name}
                    id={blog.id}
                        />)}
                
                </div>
            </div>
        </div>
        }
        </div>
    )
}