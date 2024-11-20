import { Cast, CastSchema } from "./cast";
import mongoose, { Model, Schema } from "mongoose";


export interface IMovie {
  adult: boolean;
  backdropPath?: string;
  id_themoviedb: number;
  genre_ids: number[];
  id: number;
  originalLanguage: string;
  original_title: string;
  overview: string;
  popularity: number;
  posterPath: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  rating: number;
  cast: Cast[];
}

const MovieSchema: Schema<IMovie> = new Schema({
  adult: { type: Boolean, required: true },
  backdropPath: { type: String },
  genre_ids: { type: [Number], required: true }, // Array of numbers
  id: { type: Number, required: true, unique: true }, // Unique identifier
  originalLanguage: { type: String, required: true },
  original_title: { type: String, required: true },
  overview: { type: String, required: true },
  popularity: { type: Number, required: true },
  posterPath: { type: String, required: true },
  release_date: { type: String, required: true }, // ISO 8601 date string
  title: { type: String, required: true },
  video: { type: Boolean, required: true },
  vote_average: { type: Number, required: true },
  vote_count: { type: Number, required: true },
  rating: { type: Number, required: true },
  id_themoviedb: { type: Number, required: true },
  cast: { type: [CastSchema], required: true }, // Array of 'Cast' objects
});


const MovieModel: Model<IMovie> = mongoose.models.Movie || mongoose.model<IMovie>("moviedocuments", MovieSchema);

export default MovieModel;
