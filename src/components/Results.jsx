"use client"
import Card from "@/components/Card";
import { useState} from "react";
import TinderCard from 'react-tinder-card'


export default function Results(results) {

    const [userLike, setUserLike] = useState([])
    const [userDisLike, setUserDisLike] = useState([])

    const swiped = (direction,movie) => {
        if(direction === 'right')
            setUserLike(userLike => [...userLike,movie])
        else
            setUserDisLike(userDisLike => [...userDisLike,movie])
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }
    const poster ='https://image.tmdb.org/t/p/original/'


    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />

            <div className='cardContainer' style={{ margin: "0 auto" }}>
                {results.results.map((movie, index) =>
                    <TinderCard
                        className='swipe'
                        key={movie._id} onSwipe={(dir) => swiped(dir, movie)}
                        onCardLeftScreen={() => outOfFrame(movie)}>
                        <div className="card">
                        <Card key={movie._id} result={movie}/>
                        </div>
                    </TinderCard>
                )}

            </div>
            <span className='accent-green-900 float-right'><p>Like</p>: {[...new Set(userLike.map((el)=>el.title))].length}</span>
            <span className="accent-red-600 float-left"><p>NotLike:</p> {[...new Set(userDisLike.map((el)=>el.title))].length}</span>
            <div className='cardContainer' style={{ margin: "0 auto" }}>
                {[...new Set(userDisLike.map((el)=>el.title))].length +
                [...new Set(userLike.map((el)=>el.title))].length === results.results.length ?
                    <div><p className='text-center'>Get a movie recommendation</p>
                        <button className="bg-amber-600 hover:bg-black text-white font-bold py-2 px-4 rounded">
                            Button
                        </button>
                    </div>
                     : null}
            </div>
        </div>

    )
}
