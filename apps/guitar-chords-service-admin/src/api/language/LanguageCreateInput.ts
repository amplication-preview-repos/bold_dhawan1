import { SongCreateNestedManyWithoutLanguagesInput } from "./SongCreateNestedManyWithoutLanguagesInput";

export type LanguageCreateInput = {
  name?: string | null;
  songs?: SongCreateNestedManyWithoutLanguagesInput;
};
