import { SongUpdateManyWithoutLanguagesInput } from "./SongUpdateManyWithoutLanguagesInput";

export type LanguageUpdateInput = {
  name?: string | null;
  songs?: SongUpdateManyWithoutLanguagesInput;
};
