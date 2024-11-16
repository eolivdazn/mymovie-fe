import { NextRequest, NextResponse } from "next/server";
import { Movie } from "@/api/interface/movie";
import { Crew } from "@/api/interface/crew";
import { Cast } from "@/api/interface/cast";
import { getCasts } from "../util/service";
import prisma from "../../../../prisma/db";
// import { ticketSchema } from "@/validationsSchemas/tickets";

interface Props {
  params: { id: string };
}

export async function POST(request: NextRequest) {
  console.log("test");
  for (let i = 1; i < 1; i++) {
    await new Promise((f) => setTimeout(f, 1000));
    
    const url = `https://api.themoviedb.org/3/account/20280298/rated/movies?language=en-US&page=${i}&sort_by=created_at.asc`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer" + process.env.API_KEY!,
      },
    };

    const result = await fetch(url, options);
    const moviesList = await result.json();

    for (const movie of moviesList.results as Movie[]) {
      // const {cast,crew} = await getCasts(movie.id)
      console.log(movie);

      // const newTicket = await prisma.movie.create({
      //   data: {movie},
      //     // cast: cast as Cast[],
      //     // crew: crew as Crew[]

      // });
    }
    return NextResponse.json(moviesList.results, { status: 200 });
  }
 
}
