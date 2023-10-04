"use client"
import Card from "@/components/Card";
import {useState} from "react";
import TinderCard from 'react-tinder-card'


export default function Results(results) {
    const [data, setData] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function clickHandler() {
        setIsLoading(true);
        console.log('Clicked')
        try {
            console.log(
                JSON.stringify({
                        like: [...new Set(userLike)],
                        desLike: [...new Set(userDisLike)],
                    }
                ))
            const recommendation = await fetch('http:///34.36.224.44/movies/recommendation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        like: [...new Set(userLike)],
                        desLike: [...new Set(userDisLike)],
                    }
                )
            })
            const result = await recommendation.json()
            setData(result);
            console.log(JSON.stringify(result), 'data')
            console.log(result)
            return result
        } catch (e) {

        } finally {
            setIsLoading(false);
        }
    }

    const [userLike, setUserLike] = useState([])
    const [userDisLike, setUserDisLike] = useState([])

    const swiped = (direction, movie) => {
        if (direction === 'right')
            setUserLike(userLike => [...userLike, movie])
        else
            setUserDisLike(userDisLike => [...userDisLike, movie])
    }

    const outOfFrame = (name) => {
    }

    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet'/>
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet'/>

            <div className='cardContainer' style={{margin: "auto"}}>

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
            {/*<span className='accent-green-900 float-right'>{[...new Set(userLike)].length}</span>*/}
            {/*<span className="accent-red-600 float-left"> {[...new Set(userDisLike)].length}</span>*/}
            {/*<span className=' float-right'>Like</span>*/}

            <div className='cardContainer' style={{margin: "0 auto"}}>
                {[...new Set(userDisLike)].length +
                [...new Set(userLike)].length === results.results.length && data === false ?
                    <div><p className='text-center'>Get a movie recommendation</p>
                        <button onClick={clickHandler}
                                className="align-text-bottom bg-amber-600 hover:bg-black text-white font-bold py-2 px-4 rounded">
                            Button
                        </button>
                    </div>
                    : null}
                {isLoading ? <p>Loading...If takes to long refresh the page and repeat</p> : null}

                <div style={{margin: "0 auto"}} className=" z-index: 10 cardContainer">
                    {
                        (data === false)
                            ? null
                            : (
                                data?.map((movie, index) =>
                                    <Card style={{margin: "0 auto"}} key={index} result={movie}/>)
                            )}
                </div>

            </div>

        </div>


    )
}
