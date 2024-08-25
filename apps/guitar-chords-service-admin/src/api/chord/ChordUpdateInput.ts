import { InputJsonValue } from "../../types";
import { SongChordUpdateManyWithoutChordsInput } from "./SongChordUpdateManyWithoutChordsInput";

export type ChordUpdateInput = {
  diagram?: InputJsonValue;
  fingerPositions?: string | null;
  name?: string | null;
  songChords?: SongChordUpdateManyWithoutChordsInput;
};
