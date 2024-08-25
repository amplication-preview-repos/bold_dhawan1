import { Song } from "../song/Song";

export type DifficultyLevel = {
  createdAt: Date;
  id: string;
  level: string | null;
  songs?: Array<Song>;
  updatedAt: Date;
};
