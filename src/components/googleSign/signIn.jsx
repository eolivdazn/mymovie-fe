"use client"
import React, { useEffect, useState } from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import { SlLogin } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import { GrLogout } from "react-icons/gr";
import MenuItem from "@/components/MenuItem";
import Link from "next/link";

function SignIn(){
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
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
                    <div>
                    <Link href={'/'} onClick={logoutClick} className="mx-2 lg:mx-2 hover:text-amber-600">
                        <GrLogout className="text-2xl sm:hidden" />
                        <p className="hidden sm:inline my-2 text-sm">Out</p>
                    </Link>
                    </div>
                </>
                :
                <>
                    <button onClick={handleClick}>
                        <p className=" flex sm:inline my-2 text-sm">
                            <SlLogin className="text-2xl sm:hidden mx-1 "/>
                            <span className={"p-top"}>In</span></p>
                    </button>
                </>
            }
        </div>
    );
}
export default SignIn;