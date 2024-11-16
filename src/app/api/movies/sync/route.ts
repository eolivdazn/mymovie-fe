import { NextRequest, NextResponse } from "next/server";
import { Movie } from "../../interface/movie";
import { Cast } from "../../interface/cast";
import { Crew } from "../../interface/crew";

export async function GET(request: NextRequest) {

    for (let i = 1; i < 32; i++) {
        await new Promise(f => setTimeout(f, 1000));
        console.log(i)
        const url = `https://api.themoviedb.org/3/account/20280298/rated/movies?language=en-US&page=${i}&sort_by=created_at.asc`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.API_KEY!}`
            }
        };

        const result = await fetch(url, options)
        const moviesList = await result.json()

        for (const movie of moviesList.results as Movie[]) {
          const {cast,crew} = await this.getCasts(movie.id)
            await this.moviesRepository.create({...movie, id_themoviedb: movie.id,
                cast: cast as Cast[],
                crew: crew as Crew[]
            });
        }
    }


  return NextResponse.json({test:"test"}, { status: 201 });
}


//http://localhost:3000/api/movies/sync

    