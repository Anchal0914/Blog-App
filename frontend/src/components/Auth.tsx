/* eslint-disable @typescript-eslint/no-unused-vars */
import { signupInput } from "@anchal_gupta/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({type}: {type: "Sign up" | "Sign in"}) => {

    const [postInputs, setPostInputs] = useState<signupInput>({
        name:"",
        username: "",
        password: ""
    });
    const navigate=useNavigate()

    async function sendRequest () {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="Sign up" ? "signup" : "signin"}`, 
                postInputs
            );
            const jwt = response.data.jwt;
            console.log(response)
            localStorage.setItem("token",jwt);
            navigate("/blogs")
        } catch(e){
            //alert that failed
            alert("Error while signing up")
        }
    }

    return(
        <>
            <div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">
                    <div>
                        <div className="px-10">
                            <div className="text-3xl font-extrabold">
                            Create an account
                            </div>
                            <div className="text-slate-400">
                                {type==="Sign up" ? "Already have an acoount?" : "Don't have an account"}
                                <Link to = {type==="Sign up" ? "/signin" : "/signup"} className="pl-1 underline"> 
                                    {type==="Sign up" ? "Login" : "Sign up"}
                                </Link>
                            </div>
                        </div>
                        <div>
                            { type==="Sign up"? <LabelledInput label="Name" placeholder="Anchal Gupta.." onChange={e => {
                            setPostInputs({...postInputs , name:e.target.value})
                            }} /> : null }
                            <LabelledInput label="Username" placeholder="anchal@gmail.com" onChange={e => {
                                setPostInputs({...postInputs , username:e.target.value})
                            }} />
                            <LabelledInput label="Password" placeholder="" type = "password" onChange={e => {
                                setPostInputs({...postInputs , password:e.target.value})
                            }} />
                            <button type="button" onClick={sendRequest} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-3 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                {type}
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

interface LabelledInputType{
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type? : string
}

function LabelledInput ({label, placeholder, onChange,type } : LabelledInputType) {
    return(
        <div>
            <label htmlFor="first_name" className="block my-3 text-sm font-bold text-black">{label}</label>
            <input id="first_name" type = {type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder={placeholder} required onChange={onChange}/>
        </div>
    )
}