"use client"
import React, { useEffect, useState } from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import {BsFillInfoCircleFill} from "react-icons/bs";
import { SlLogin } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import { GrLogout } from "react-icons/gr";



import MenuItem from "@/components/MenuItem";
// import Home from "./Home";

function SignIn(){
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            console.log(JSON.stringify(data.user.uid))
            localStorage.setItem("email",data.user.email)
            localStorage.setItem("userUID",data.user.uid)//tjv6Ad6ORPfkCkdIHxO7aVW1OVu2
        })
    }
    const logoutClick =()=>{
            localStorage.removeItem("email")
            localStorage.removeItem("userUID")
        setValue('')
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email')
        )
    })
    const listUrl = `/movieList?email=${value}`
    return (

        <div className="flex">
            {value ?
                <>
                    <MenuItem title="Your list" address={listUrl} Icon={VscAccount}/>
                    <button onClick={logoutClick}>
                            <GrLogout className="text-2xl  mx-1"/>
                    </button>
                </>
                :
                <>
                    <button onClick={handleClick}>
                        <p className=" flex sm:inline my-2 text-sm">
                            <SlLogin className="text-2xl sm:hidden mx-1"/>
                            <span style={{"padding-top": "2px" }}>In</span></p>
                    </button>
                </>
            }
        </div>
    );
}
export default SignIn;