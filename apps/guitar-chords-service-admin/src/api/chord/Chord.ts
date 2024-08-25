import { JsonValue } from "type-fest";
import { SongChord } from "../songChord/SongChord";

export type Chord = {
  createdAt: Date;
  diagram: JsonValue;
  fingerPositions: string | null;
  id: string;
  name: string | null;
  songChords?: Array<SongChord>;
  updatedAt: Date;
};
