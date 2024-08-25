import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ChordTitle } from "../chord/ChordTitle";
import { SongTitle } from "../song/SongTitle";

export const SongChordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="chord.id" reference="Chord" label="Chord">
          <SelectInput optionText={ChordTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="position" source="position" />
        <ReferenceInput source="song.id" reference="Song" label="Song">
          <SelectInput optionText={SongTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
