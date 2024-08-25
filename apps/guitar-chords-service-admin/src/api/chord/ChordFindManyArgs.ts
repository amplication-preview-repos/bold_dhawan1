import { ChordWhereInput } from "./ChordWhereInput";
import { ChordOrderByInput } from "./ChordOrderByInput";

export type ChordFindManyArgs = {
  where?: ChordWhereInput;
  orderBy?: Array<ChordOrderByInput>;
  skip?: number;
  take?: number;
};
