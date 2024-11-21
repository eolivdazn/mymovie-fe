"use client"
import {useSearchParams} from "next/navigation";
import Card from "../../components/Card";
import {useEffect, useState} from "react";

export default function Page() {
    const url = process.env.URL_MOVIES

    const [data, setData] = useState(false)
    const [isLoading, setLoading] = useState(true)

    const params =  useSearchParams()
    const desLike = params.get('desLike')
    const like = params.get('like')
    const email = params.get('email')
    const desLikeNumbersArray = desLike.split(',').map(string => parseInt(string));
    const likeNumbersArray = like.split(',').map(string => parseInt(string));

    useEffect(() => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    like: likeNumbersArray,
                    desLike: desLikeNumbersArray,
                    email: email
                }
            )
        };

         fetch(`${url}recommendation/`,{...options})
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p className ='mb-10 text-center'>Loading...</p>
    if (!data.data) return <div className ='mb-10 text-center'>No recommendation, please refresh the page.Click in Home on the top left menu</div>
    return (
        <>
            <div className={" justify-stretch text-center  bg-amber-500 py-2 px-2 rounded-lg m-1"}>Recommendation</div>
            <Card key={data.data.id} result={data.data}/>
        </>

    );
}
