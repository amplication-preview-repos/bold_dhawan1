import { SortOrder } from "../../util/SortOrder";

export type SongChordOrderByInput = {
  chordId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  position?: SortOrder;
  songId?: SortOrder;
  updatedAt?: SortOrder;
};
