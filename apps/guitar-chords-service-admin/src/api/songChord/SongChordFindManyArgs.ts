import { SongChordWhereInput } from "./SongChordWhereInput";
import { SongChordOrderByInput } from "./SongChordOrderByInput";

export type SongChordFindManyArgs = {
  where?: SongChordWhereInput;
  orderBy?: Array<SongChordOrderByInput>;
  skip?: number;
  take?: number;
};
