"use client"
import Card from "@/components/Card";
import { useState} from "react";
import TinderCard from 'react-tinder-card'


export default  function Results(results) {
    async function clickHandler() {
        console.log('Clicked')
        console.log(
            JSON.stringify({
            like: [...new Set(userLike)],
            desLike: [...new Set(userDisLike)],
        }
        ))
        const res = await fetch('http://localhost:3010/movies/recommendation', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(
                {
                    like: [...new Set(userLike)],
                    desLike: [...new Set(userDisLike)],
                }
            )
        })
        console.log(res)
    }

    const [userLike, setUserLike] = useState([])
    const [userDisLike, setUserDisLike] = useState([])

    const swiped = (direction,movie) => {
        if(direction === 'right')
            setUserLike(userLike => [...userLike,movie])
        else
            setUserDisLike(userDisLike => [...userDisLike,movie])
    }

    const outOfFrame = (name) => {
    }

    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />

            <div className='cardContainer' style={{ margin: "0 auto" }}>
                {results.results.map((movie, index) =>
                    <TinderCard
                        className='swipe'
                        key={movie._id} onSwipe={(dir) => swiped(dir, movie.id_themoviedb)}
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
                {[...new Set(userDisLike)].length +
                [...new Set(userLike)].length === results.results.length ?
                    <div><p className='text-center'>Get a movie recommendation</p>
                        <button onClick={clickHandler} className="bg-amber-600 hover:bg-black text-white font-bold py-2 px-4 rounded">
                            Button
                        </button>
                    </div>
                     : null}
            </div>
        </div>

    )
}
