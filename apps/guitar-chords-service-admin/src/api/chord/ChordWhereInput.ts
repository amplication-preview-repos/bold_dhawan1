import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SongChordListRelationFilter } from "../songChord/SongChordListRelationFilter";

export type ChordWhereInput = {
  diagram?: JsonFilter;
  fingerPositions?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  songChords?: SongChordListRelationFilter;
};
