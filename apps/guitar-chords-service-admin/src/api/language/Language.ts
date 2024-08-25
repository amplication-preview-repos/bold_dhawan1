import { Song } from "../song/Song";

export type Language = {
  createdAt: Date;
  id: string;
  name: string | null;
  songs?: Array<Song>;
  updatedAt: Date;
};
