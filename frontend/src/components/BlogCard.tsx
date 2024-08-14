import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title : string;
    content: string
    publishedDate: string;
    id:number
}
export const BlogCard = (
    {authorName, title,content , publishedDate,id} : BlogCardProps) => {

    return(
        <Link to={`/blog/${id}`}>
            <div className="border-b p-4 border-slate-200 max-w-screen-md w-screen cursor-pointer">
                <div className="flex gap-2 items-center">
                    
                    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-600 rounded-full">
                        <span className="font-xs text-gray-100">
                            {authorName[0]}
                        </span>
                    </div>
                    <div className="font-extralight ">
                        {authorName}
                    </div>
                    <div>
                        &#9679;
                    </div>
                    <div className="text-slate-500 font-thin">
                        {publishedDate}
                    </div>
                </div>
                <div className="text-xl font-semibold pt-2">
                    {title}
                </div>
                <div className="text-md font-thin">
                    {content.slice(0,100) + "..."}
                </div>
                <div className="text-slate-500 text-sm font-thin pt-3">
                    {Math.ceil(content.length / 100)} minute read
                </div>
            </div>
        </Link>
    )
}