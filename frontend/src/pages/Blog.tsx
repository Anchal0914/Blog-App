import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useBlog"
import { AppBar } from "../components/AppBar";
import { BlogSkeleton } from "../components/BlogSkeleton";

export function Blog () {
    const {id}  = useParams();
    const {loading,blog} = useBlog({id: id || ""});

    if (loading) {
        return( 
            <div>
                <AppBar/>
                <BlogSkeleton/>
            </div>
        )
    }

    if (!blog) {
        return (
            <div>
                Blog not found
            </div>
        );
    }

    return (
        <div>
            <AppBar/>
            <div className="flex justify-center">

            
                <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-2xl gap-2">
                    
                    <div className="col-span-8 ">
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-2">
                            Post on 12 July 2024
                        </div>
                        <div className="pt-4">
                            {blog.content}
                        </div>
                    </div>

                    <div className="col-span-4">
                        <span className="pb-2">Author</span>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-600 rounded-full">
                                <span className="font-xs text-gray-100">
                                    {blog.author.name[0]}
                                </span>
                            </div>
                            <div className="text-xl font-bold">
                            {blog.author.name}
                            </div>
                        </div>
                        <div className="pt-2 text-slate-500">
                            Random phrase to cathc the reader's attention
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}