import {useState} from "react";
import Image from "next/image";

export default  function WatchProvider({movie_id}) {
    const [provider, setProvider] = useState(false);

    getWatchProvider(movie_id).then( (res) => {
        console.log(res.results.PT)
        setProvider(res)
        }
    )

    function getWatchProvider(movie_id) {
         const options = {
             method: 'GET',
             headers: {
                 accept: 'application/json',
                 Authorization: `Bearer ${process.env.API_KEY}`
             }
         };
         const url = `https://api.themoviedb.org/3/movie/${movie_id}/watch/providers`

         const streamProvider = fetch(`${url}`, {...options, next: {revalidate: 30}})
             .then(response => response.json())
             .catch(err => console.error(err));


         if (!streamProvider) {
             throw new Error("Failed to fetch API");
         }
         return streamProvider
     }


    return (
        provider === false  ? <div>loading</div> :
            <div className="flex px-2 mr-4 ml-4 mb-3 font-bold  rounded"> Available on:
                {provider.results.PT?.buy?.map((el) => (
                    <div key={el.provider_id}>
                        <Image width={30} height={30}  src={`https://image.tmdb.org/t/p/original/${el.logo_path}`} alt={el.provider_name}/>
                    </div>
            ))
            }
            </div>

    )
}