import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SongChordTitle } from "../songChord/SongChordTitle";

export const ChordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="fingerPositions" multiline source="fingerPositions" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="songChords"
          reference="SongChord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SongChordTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
