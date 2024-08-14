import { Link } from "react-router-dom"

export const AppBar = () => {
    return(
        <div className="border-b flex justify-between px-10 py-3 items-center">
            <Link to="/blogs">
                <div className="font-semibold text-lg">
                    Medium
                </div>
            </Link>
            <div className="flex gap-2 items-center">
                <Link to="/publish">
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Publish
                    </button>
                </Link>
                <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-600 rounded-full">
                    <span className="font-sm text-gray-100 font-semibold">
                        M
                    </span>
                </div>
            </div>
        </div>
    )
}