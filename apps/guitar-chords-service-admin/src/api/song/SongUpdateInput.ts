import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { DifficultyLevelWhereUniqueInput } from "../difficultyLevel/DifficultyLevelWhereUniqueInput";
import { GenreWhereUniqueInput } from "../genre/GenreWhereUniqueInput";
import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";
import { SongChordUpdateManyWithoutSongsInput } from "./SongChordUpdateManyWithoutSongsInput";

export type SongUpdateInput = {
  artist?: ArtistWhereUniqueInput | null;
  difficultyLevel?: DifficultyLevelWhereUniqueInput | null;
  genre?: GenreWhereUniqueInput | null;
  language?: LanguageWhereUniqueInput | null;
  lyrics?: string | null;
  songChords?: SongChordUpdateManyWithoutSongsInput;
  title?: string | null;
};
