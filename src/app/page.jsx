import Results from "@/components/Results";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
export default async function Home() {

    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
};
    const url = process.env.URL_MOVIES

    const res = await fetch(`${url}api/movies/getInit`,{...options, next: { revalidate: 30 } })
        .then(response => response.json())
        .catch(err => console.error(err));

if(!res) {
    throw new Error("Failed to fetch API");
}
    return <Results results={res} />;
}
