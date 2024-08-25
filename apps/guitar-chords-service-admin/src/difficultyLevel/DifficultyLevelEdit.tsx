import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SongTitle } from "../song/SongTitle";

export const DifficultyLevelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="level" source="level" />
        <ReferenceArrayInput
          source="songs"
          reference="Song"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SongTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
