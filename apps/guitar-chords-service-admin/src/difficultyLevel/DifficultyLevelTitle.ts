import { DifficultyLevel as TDifficultyLevel } from "../api/difficultyLevel/DifficultyLevel";

export const DIFFICULTYLEVEL_TITLE_FIELD = "level";

export const DifficultyLevelTitle = (record: TDifficultyLevel): string => {
  return record.level?.toString() || String(record.id);
};
