import { InputJsonValue } from "../../types";
import { SongChordCreateNestedManyWithoutChordsInput } from "./SongChordCreateNestedManyWithoutChordsInput";

export type ChordCreateInput = {
  diagram?: InputJsonValue;
  fingerPositions?: string | null;
  name?: string | null;
  songChords?: SongChordCreateNestedManyWithoutChordsInput;
};
