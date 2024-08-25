import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ChordTitle } from "../chord/ChordTitle";
import { SongTitle } from "../song/SongTitle";

export const SongChordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="chord.id" reference="Chord" label="Chord">
          <SelectInput optionText={ChordTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="position" source="position" />
        <ReferenceInput source="song.id" reference="Song" label="Song">
          <SelectInput optionText={SongTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
