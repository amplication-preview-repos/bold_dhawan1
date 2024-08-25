import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { DifficultyLevelWhereUniqueInput } from "../difficultyLevel/DifficultyLevelWhereUniqueInput";
import { GenreWhereUniqueInput } from "../genre/GenreWhereUniqueInput";
import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";
import { SongChordCreateNestedManyWithoutSongsInput } from "./SongChordCreateNestedManyWithoutSongsInput";

export type SongCreateInput = {
  artist?: ArtistWhereUniqueInput | null;
  difficultyLevel?: DifficultyLevelWhereUniqueInput | null;
  genre?: GenreWhereUniqueInput | null;
  language?: LanguageWhereUniqueInput | null;
  lyrics?: string | null;
  songChords?: SongChordCreateNestedManyWithoutSongsInput;
  title?: string | null;
};
