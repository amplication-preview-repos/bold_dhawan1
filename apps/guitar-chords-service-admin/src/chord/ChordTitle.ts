import { Chord as TChord } from "../api/chord/Chord";

export const CHORD_TITLE_FIELD = "name";

export const ChordTitle = (record: TChord): string => {
  return record.name?.toString() || String(record.id);
};
