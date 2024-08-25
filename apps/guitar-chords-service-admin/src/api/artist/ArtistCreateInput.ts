import { SongCreateNestedManyWithoutArtistsInput } from "./SongCreateNestedManyWithoutArtistsInput";

export type ArtistCreateInput = {
  name?: string | null;
  songs?: SongCreateNestedManyWithoutArtistsInput;
};
