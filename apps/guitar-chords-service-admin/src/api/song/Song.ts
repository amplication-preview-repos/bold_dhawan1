import { Artist } from "../artist/Artist";
import { DifficultyLevel } from "../difficultyLevel/DifficultyLevel";
import { Genre } from "../genre/Genre";
import { Language } from "../language/Language";
import { SongChord } from "../songChord/SongChord";

export type Song = {
  artist?: Artist | null;
  createdAt: Date;
  difficultyLevel?: DifficultyLevel | null;
  genre?: Genre | null;
  id: string;
  language?: Language | null;
  lyrics: string | null;
  songChords?: Array<SongChord>;
  title: string | null;
  updatedAt: Date;
};
