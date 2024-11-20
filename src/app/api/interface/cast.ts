import { Schema } from "mongoose";

const mongoose = require('mongoose');

export interface Cast {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

export const CastSchema = new Schema<Cast>({
    adult: { type: Boolean, required: true },
    gender: { type: Number, required: true },
    id: { type: Number, required: true, unique: true },
    known_for_department: { type: String, required: true },
    name: { type: String, required: true },
    original_name: { type: String, required: true },
    popularity: { type: Number, required: true },
    profile_path: { type: String },
    cast_id: { type: Number, required: true },
    character: { type: String, required: true },
    credit_id: { type: String, required: true },
    order: { type: Number, required: true }
  });
