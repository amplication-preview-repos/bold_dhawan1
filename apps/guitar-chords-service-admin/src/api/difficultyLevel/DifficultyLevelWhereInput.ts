import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SongListRelationFilter } from "../song/SongListRelationFilter";

export type DifficultyLevelWhereInput = {
  id?: StringFilter;
  level?: StringNullableFilter;
  songs?: SongListRelationFilter;
};
