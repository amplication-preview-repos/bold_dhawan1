import { Song } from "../song/Song";

export type Artist = {
  createdAt: Date;
  id: string;
  name: string | null;
  songs?: Array<Song>;
  updatedAt: Date;
};
