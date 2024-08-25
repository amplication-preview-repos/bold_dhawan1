import { SongUpdateManyWithoutDifficultyLevelsInput } from "./SongUpdateManyWithoutDifficultyLevelsInput";

export type DifficultyLevelUpdateInput = {
  level?: string | null;
  songs?: SongUpdateManyWithoutDifficultyLevelsInput;
};
