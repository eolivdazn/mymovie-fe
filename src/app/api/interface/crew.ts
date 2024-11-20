const mongoose = require('mongoose');

export interface Crew {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
}

export const CrewSchema = new mongoose.Schema({
    adult: { type: Boolean, required: true },
    gender: { type: Number, required: true }, // Assuming gender is represented as 0, 1, or 2
    id: { type: Number, required: true, unique: true }, // Unique identifier
    known_for_department: { type: String, required: true },
    name: { type: String, required: true },
    original_name: { type: String, required: true },
    popularity: { type: Number, required: true },
    profile_path: { type: String },
    credit_id: { type: String, required: true },
    department: { type: String, required: true },
    job: { type: String, required: true }
  });
  
