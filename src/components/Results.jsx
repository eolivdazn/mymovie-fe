"use client"
import Card from "@/components/Card";
import {useState} from "react";
import TinderCard from 'react-tinder-card'
import {IoMdHeartDislike } from 'react-icons/io'
import {FcLike} from 'react-icons/fc'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import Link from "next/link";


export default function Results(results) {

    const [requestRecommendation] = useState(false);
    const [isLoading] = useState(false);
    const [noRecommendation] = useState(true);
    const [userLike, setUserLike] = useState([])
    const [userDisLike, setUserDisLike] = useState([])

    const swiped = (direction, movie) => {
        if (direction === 'right')
            setUserLike(userLike => [...userLike, movie])
        else
            setUserDisLike(userDisLike => [...userDisLike, movie])
    }

    const outOfFrame = () => {
    }
    const email = (typeof window == 'undefined') ?   "" : localStorage.getItem('email')


    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet'/>

            <div className='cardContainer mr-1 ml-1' style={{margin: "auto"}}>
                {
                    ([...new Set(userDisLike)].length +
                        [...new Set(userLike)].length !== results.results.length )

                        ?
                            <div className="  grid grid-cols-7 justify-stretch  bg-amber-500 py-2 px-2 rounded-lg ml-1 mr-1">
                                <IoMdHeartDislike className="top-1"></IoMdHeartDislike>
                                <div className="justify-items-start px-1">{[...new Set(userDisLike)].length}</div>
                                <AiOutlineArrowLeft className='top-1'></AiOutlineArrowLeft>
                               <h1 className="text-center font-bold "> Swipe</h1>
                                <div className="grid justify-items-end"><AiOutlineArrowRight className="top-1"></AiOutlineArrowRight></div>
                                <div className="grid justify-items-end">{[...new Set(userLike)].length}</div>
                                <div className="grid justify-items-end"><FcLike className='top-1'></FcLike></div>


                            </div>

                        : null
                }
                {
                    (requestRecommendation !== false && requestRecommendation.length > 0)
                        ? <div className="grid-rows-1 justify-center mb-2">
                            <div className="grid font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1 text-center"> Recommendation</div>
                        </div>
                        : null
                }

                {results.results.map((movie) =>
                    <TinderCard
                        className='swipe mr-1 ml-3'
                        key={movie._id} onSwipe={(dir) => swiped(dir, movie.id_themoviedb)}
                        onCardLeftScreen={() => outOfFrame(movie)}>
                        <div className="card">
                            <Card key={movie._id} result={movie}/>
                        </div>
                    </TinderCard>
                )}
            </div>
            <div className='cardContainer' style={{margin: "0 auto"}}>
                {[...new Set(userDisLike)].length +
                [...new Set(userLike)].length === results.results.length &&
                requestRecommendation === false &&
                noRecommendation === true
                    ? <div><p className='text-center'>Get a movie recommendation</p>
                        <Link
                            replace
                            prefetch={false}
                            href={`/recommendation?like=${[...new Set(userLike)]}&desLike=${[...new Set(userDisLike)]}&email=${email}`}
                                className=" mr-4 ml-4 mb-3 bg-amber-600 hover:bg-black text-center text-white font-bold py-2 px-4 rounded">
                            Recommendation
                        </Link>
                    </div>
                    :  null}
                {isLoading ? <p>Loading...If takes to long refresh the page and repeat!</p> : null}
            </div>
        </div>


    )
}
