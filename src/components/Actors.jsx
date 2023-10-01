import Link from "next/link";

export default function Actors({actor}) {
    return (
            <Link href={`/person/${actor.id}`}>
                <span className="sm:hover:shadow-slate-400 sm:shadow-md flex-1 bg-gray-100 border-gray-200  px-2 rounded-lg mr-1" key={actor}>
            {actor.name}</span>
        </Link>
    )
}
