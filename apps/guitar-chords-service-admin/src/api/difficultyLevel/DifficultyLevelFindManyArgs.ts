import { DifficultyLevelWhereInput } from "./DifficultyLevelWhereInput";
import { DifficultyLevelOrderByInput } from "./DifficultyLevelOrderByInput";

export type DifficultyLevelFindManyArgs = {
  where?: DifficultyLevelWhereInput;
  orderBy?: Array<DifficultyLevelOrderByInput>;
  skip?: number;
  take?: number;
};
