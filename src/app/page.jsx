import Results from "@/components/Results";
export default async function Home() {

    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
};
//     const genre = searchParams.genre || "fetchTrending";
//
    const res = await fetch(`https://movies-400919.ey.r.appspot.com/movies/getInitialMovies/`,{...options, next: { revalidate: 30 } })
        .then(response => response.json())
        .catch(err => console.error(err));

if(!res) {
    throw new Error("Failed to fetch API");
}
    return <Results results={res} />;
}
