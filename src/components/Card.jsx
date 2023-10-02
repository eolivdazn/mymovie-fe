
import Link from "next/link";
import Image from 'next/image'
import {AiFillStar} from 'react-icons/ai'
import {BsCalendar2DateFill} from 'react-icons/bs'
import Actors from "@/components/Actors";
import {useState} from "react";


export default function Card({result}) {
    const [isActive, setIsActive] = useState(false);

    // const handleClick = () => {
    //     setIsActive(current => !current);
    // };

    return (
        <div
            // onClick={handleClick}
              style={{
                  backgroundColor: isActive ? 'lightsalmon' : '',
              }}
            className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:m-2 transition-shadow duration-200 group" >
            {/*<Link href={`/movie/${result.id_themoviedb}`}>*/}
                <Image
                    src={ result.poster_path != null ?
                        `https://image.tmdb.org/t/p/original/${
                        result.backdrop_path || result.poster_path
                    }` : `/example_small.png`}
                       width={500}
                       height={300}
                       className="sm-rounded-t-lg group-hover:opacity-75 transition-opacity duration-200"
                       placeholder={"blur"}
                       blurDataURL="spinner.svg"
                       alt={result.title || result.name}
                       style={{
                           maxHeight: "100%",
                           maxWidth: "auto",
                       }}
                ></Image>
                <div className="p-2">
                    {/*<p className="line-clamp-2 text-md">*/}
                    {/*    {result.overview}*/}
                    {/*</p>*/}
                    <h1 className="font-bold p-2">{result.title || result.name}</h1>
                    <p className="flex items-center">
                    <BsCalendar2DateFill className="ml-1 mr-1 "/>{result.release_date || result.firts_air_date}
                    <AiFillStar className="ml-1 mr-1 bg-amber-500"/>{Math.round(result.vote_average)}
                    </p>
                </div>
                <div className="p-2">
                    <p className="line-clamp-4 text-md">
                        {result.overview}
                    </p>
                </div>
            {/*</Link>*/}
            <div className="p-2 inline"> <span className="font-bold">Cast:</span>
                        { result.cast?.map((el,index) => ( <Actors key={index} actor={el}>
                            </Actors>)
                        ).slice(0, 3)}
                </div>
              <div className="p-2"> <span className="font-bold">Director:</span>
                { result.crew?.filter((el) =>  el.job === 'Director')
                    .map((el) => ( <Actors key={el} actor={el}> </Actors>)
                ).slice(0, 2)}
            </div>
        </div>


    )
}
