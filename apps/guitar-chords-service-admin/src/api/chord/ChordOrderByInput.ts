import { SortOrder } from "../../util/SortOrder";

export type ChordOrderByInput = {
  createdAt?: SortOrder;
  diagram?: SortOrder;
  fingerPositions?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
