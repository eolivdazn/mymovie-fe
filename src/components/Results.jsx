"use client"
import Card from "@/components/Card";
import { useState} from "react";
import TinderCard from 'react-tinder-card'
import {BsCalendar2DateFill} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";


export default function Results(results) {

    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
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
                {results.results.map((movie) =>
                    <TinderCard
                        className='swipe'
                        key={movie._id} onSwipe={(dir) => swiped(dir, movie.title)}
                        onCardLeftScreen={() => outOfFrame(movie.title)}>
                        <div className="card">
                        <Card key={movie._id} result={movie}/>
                        </div>
                    </TinderCard>
                )}
            </div>
            {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
        </div>
    )
}
