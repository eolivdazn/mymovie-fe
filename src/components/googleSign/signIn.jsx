"use client"
import React, { useEffect, useState } from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import {BsFillInfoCircleFill} from "react-icons/bs";
import MenuItem from "@/components/MenuItem";
// import Home from "./Home";

function SignIn(){
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })
    const listUrl = `/movieList?email=${value}`
    return (

        <div>
            {value? <MenuItem title="Your list" address={listUrl} Icon={BsFillInfoCircleFill} />:
                <button onClick={handleClick}>Signin With Google</button>
            }
        </div>
    );
}
export default SignIn;