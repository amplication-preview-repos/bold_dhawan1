import { SongCreateNestedManyWithoutGenresInput } from "./SongCreateNestedManyWithoutGenresInput";

export type GenreCreateInput = {
  name?: string | null;
  songs?: SongCreateNestedManyWithoutGenresInput;
};
