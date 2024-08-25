import { GenreWhereUniqueInput } from "./GenreWhereUniqueInput";
import { GenreUpdateInput } from "./GenreUpdateInput";

export type UpdateGenreArgs = {
  where: GenreWhereUniqueInput;
  data: GenreUpdateInput;
};
