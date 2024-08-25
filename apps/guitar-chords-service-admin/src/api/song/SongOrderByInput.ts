import { SortOrder } from "../../util/SortOrder";

export type SongOrderByInput = {
  artistId?: SortOrder;
  createdAt?: SortOrder;
  difficultyLevelId?: SortOrder;
  genreId?: SortOrder;
  id?: SortOrder;
  languageId?: SortOrder;
  lyrics?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
