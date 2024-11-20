import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/db";
import { getCasts } from "../util/getCast";

export async function GET(request: NextRequest) {
  for (let i = 1; i < 2; i++) {
    await new Promise((f) => setTimeout(f, 1000));
    console.log(i);
    const url = `https://api.themoviedb.org/3/account/20280298/rated/movies?language=en-US&page=10&sort_by=created_at.asc`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_KEY!}`,
      },
    };

    const result = await fetch(url, options);
    const moviesList = await result.json();

    for (const movie of moviesList.results) {
      const { cast, crew } = await getCasts(movie.id);
      console.log(cast.slice(0, 10));
      console.log(movie);
      await prisma.movie.create({
        data: {
          ...movie,
          idThemoviedb: movie.id,
        //   cast: cast.slice(0, 10),
        //   crew: crew.slice(0, 10),
        },
      });
    }
  }

  return NextResponse.json({ test: "test" }, { status: 201 });
}

//http://localhost:3000/api/movies/sync
