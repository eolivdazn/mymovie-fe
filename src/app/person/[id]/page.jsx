import Image from 'next/image'
const API_KEY = process.env.API_KEY


async function getPerson(person_id){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };//
     return await fetch(`http://api.themoviedb.org/3/person/${person_id}`,{...options, next: { revalidate: 3600 } })
        .then(response => response.json())
        .catch(err => console.error(err))
}

export default async function Page({params}) {
    const personId = params.id
    const person = await getPerson(personId)

    return (
        <div className="w-full">
            <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
                <Image
                    src={`https://image.tmdb.org/t/p/original/${
                        person.profile_path || person.poster_path
                    }`}
                    width={300}
                    height={100}
                    className="rounded-lg"
                    // style={{
                    //     maxWidth: "100%",
                    //     height: "100%",
                    // }}
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                    alt="Movie poster"
                ></Image>
                <div className="p-2">
                    <h2 className="text-lg mb-3 font-bold">
                        {person.name}
                    </h2>
                    <p className="text-lg mb-3">
                        <span className="font-semibold mr-1">place_of_birth:</span>
                        {person.place_of_birth}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-1">biography</span>
                        {person.biography}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-1">birthday:</span>
                        {person.birthday}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-1">known_for_department:</span>
                        {person.known_for_department}
                    </p>

                </div>
            </div>
        </div>
    );
}
