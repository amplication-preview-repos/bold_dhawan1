import { ChordWhereUniqueInput } from "../chord/ChordWhereUniqueInput";
import { SongWhereUniqueInput } from "../song/SongWhereUniqueInput";

export type SongChordUpdateInput = {
  chord?: ChordWhereUniqueInput | null;
  position?: number | null;
  song?: SongWhereUniqueInput | null;
};
