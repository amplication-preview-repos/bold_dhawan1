import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SongListRelationFilter } from "../song/SongListRelationFilter";

export type ArtistWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  songs?: SongListRelationFilter;
};
