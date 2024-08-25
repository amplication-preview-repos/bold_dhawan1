import { ChordWhereUniqueInput } from "../chord/ChordWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SongWhereUniqueInput } from "../song/SongWhereUniqueInput";

export type SongChordWhereInput = {
  chord?: ChordWhereUniqueInput;
  id?: StringFilter;
  position?: IntNullableFilter;
  song?: SongWhereUniqueInput;
};
