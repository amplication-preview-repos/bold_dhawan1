import { SongUpdateManyWithoutGenresInput } from "./SongUpdateManyWithoutGenresInput";

export type GenreUpdateInput = {
  name?: string | null;
  songs?: SongUpdateManyWithoutGenresInput;
};
