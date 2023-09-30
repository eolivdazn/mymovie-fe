import Link from "next/link";
import Image from 'next/image'
import {HiThumbUp, } from 'react-icons/hi'
import {AiFillStar} from 'react-icons/ai'
import {BsCalendar2DateFill} from 'react-icons/bs'
import {FaFlag} from 'react-icons/fa'

export default function Card({result}) {
    return (
        <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
            <Link href={`/movie/${result.id_themoviedb}`}>
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
                    <h2 className="truncate text-lg font-bold">{result.title || result.name}</h2>
                    <p className="flex items-center">
                    <BsCalendar2DateFill className="ml-1 mr-1 "/>{result.release_date || result.firts_air_date}
                    <AiFillStar className="ml-1 mr-1 bg-amber-500"/>{Math.round(result.vote_average)}
                    </p>
                </div>
            </Link>
        </div>

    )
}
