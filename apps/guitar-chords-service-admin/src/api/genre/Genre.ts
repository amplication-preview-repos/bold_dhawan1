import { Song } from "../song/Song";

export type Genre = {
  createdAt: Date;
  id: string;
  name: string | null;
  songs?: Array<Song>;
  updatedAt: Date;
};
