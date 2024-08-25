import { Chord } from "../chord/Chord";
import { Song } from "../song/Song";

export type SongChord = {
  chord?: Chord | null;
  createdAt: Date;
  id: string;
  position: number | null;
  song?: Song | null;
  updatedAt: Date;
};
