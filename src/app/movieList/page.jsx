'use client'
import {useSearchParams} from "next/navigation";
import Card from "@/components/Card";
import Link from "next/link";

async function GetRecommendation() {
    const url = process.env.URL_MOVIES
    const email = useSearchParams().getAll('email')[0]

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                email: email
            }
        )
    };

    const res = await fetch(`${url}recommendation/`, {...options, next: {revalidate: 30}})
        .then(response => response.json())
        .catch(err => console.error(err));

    if (!res) {
        throw new Error("Failed to fetch API");
    }
    return res
}

export default async function Page() {
     const rec = await GetRecommendation()
    return (
        <>
            <div className={"justify-center text-center text-black font-bold border-black border-b"}>Recommendations List</div>
            {rec.map((el=>
                <>

                <Link href={`/movie/${el.movie.id_themoviedb}`}>
                        <div className="mr-4 ml-4 mb-3  text-center text-amber-600 font-bold py-2 px-2 rounded">
                            <span className={"text-black"}>Recommend on: </span>{el.recommendationDate.split('T')[0]}
                        </div>
                    <Card result={el.movie}></Card>
                </Link>
                </>
            ))}
        </>




    );
}
