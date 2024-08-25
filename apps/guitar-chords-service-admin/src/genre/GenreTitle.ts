import { Genre as TGenre } from "../api/genre/Genre";

export const GENRE_TITLE_FIELD = "name";

export const GenreTitle = (record: TGenre): string => {
  return record.name?.toString() || String(record.id);
};
