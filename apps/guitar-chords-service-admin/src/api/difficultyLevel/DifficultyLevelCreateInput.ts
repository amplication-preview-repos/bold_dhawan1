import { SongCreateNestedManyWithoutDifficultyLevelsInput } from "./SongCreateNestedManyWithoutDifficultyLevelsInput";

export type DifficultyLevelCreateInput = {
  level?: string | null;
  songs?: SongCreateNestedManyWithoutDifficultyLevelsInput;
};
