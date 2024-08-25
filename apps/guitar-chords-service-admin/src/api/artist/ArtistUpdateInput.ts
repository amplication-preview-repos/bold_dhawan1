import { SongUpdateManyWithoutArtistsInput } from "./SongUpdateManyWithoutArtistsInput";

export type ArtistUpdateInput = {
  name?: string | null;
  songs?: SongUpdateManyWithoutArtistsInput;
};
