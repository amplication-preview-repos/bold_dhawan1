import { Song as TSong } from "../api/song/Song";

export const SONG_TITLE_FIELD = "title";

export const SongTitle = (record: TSong): string => {
  return record.title?.toString() || String(record.id);
};
