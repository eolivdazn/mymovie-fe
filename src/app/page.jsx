import Results from "@/components/Results";
import {data} from "@/app/data";
// export const dynamic = "force-dynamic"; // this is the fix
// const API_KEY = process.env.API_KEY
export default async function Home() {

    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    // Authorization: `Bearer ${API_KEY}`
  }
};
//     const genre = searchParams.genre || "fetchTrending";
//
    const res = await fetch(`http://localhost:3010/movies/`,{...options, next: { revalidate: 10 } })
        .then(response => response.json())
        .catch(err => console.error(err));

if(!res) {
    throw new Error("Failed to fetch API");
}

    return <Results results={res} />;
}
