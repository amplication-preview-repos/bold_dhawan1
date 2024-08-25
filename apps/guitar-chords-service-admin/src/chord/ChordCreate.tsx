import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SongChordTitle } from "../songChord/SongChordTitle";

export const ChordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
