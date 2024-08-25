import { ChordWhereUniqueInput } from "../chord/ChordWhereUniqueInput";
import { SongWhereUniqueInput } from "../song/SongWhereUniqueInput";

export type SongChordCreateInput = {
  chord?: ChordWhereUniqueInput | null;
  position?: number | null;
  song?: SongWhereUniqueInput | null;
};
