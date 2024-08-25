import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { DifficultyLevelWhereUniqueInput } from "../difficultyLevel/DifficultyLevelWhereUniqueInput";
import { GenreWhereUniqueInput } from "../genre/GenreWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SongChordListRelationFilter } from "../songChord/SongChordListRelationFilter";

export type SongWhereInput = {
  artist?: ArtistWhereUniqueInput;
  difficultyLevel?: DifficultyLevelWhereUniqueInput;
  genre?: GenreWhereUniqueInput;
  id?: StringFilter;
  language?: LanguageWhereUniqueInput;
  lyrics?: StringNullableFilter;
  songChords?: SongChordListRelationFilter;
  title?: StringNullableFilter;
};
