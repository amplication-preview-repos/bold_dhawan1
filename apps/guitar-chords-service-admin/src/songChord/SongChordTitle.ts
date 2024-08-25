import { SongChord as TSongChord } from "../api/songChord/SongChord";

export const SONGCHORD_TITLE_FIELD = "id";

export const SongChordTitle = (record: TSongChord): string => {
  return record.id?.toString() || String(record.id);
};
