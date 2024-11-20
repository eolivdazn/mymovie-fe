import { NextRequest, NextResponse } from "next/server";
import MovieModel  from "../../interface/movie"


export async function GET(request: NextRequest) {

    const movie = await MovieModel.aggregate([
        {
          $sample: { size: 5 }
        }
      ]);
    return NextResponse.json(movie,{ status: 200 });


//   return NextResponse.json({ test: "test" }, );
}


//http://localhost:3000/api/movies/sync
