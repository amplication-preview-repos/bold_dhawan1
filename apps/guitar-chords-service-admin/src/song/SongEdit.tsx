import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ArtistTitle } from "../artist/ArtistTitle";
import { DifficultyLevelTitle } from "../difficultyLevel/DifficultyLevelTitle";
import { GenreTitle } from "../genre/GenreTitle";
import { LanguageTitle } from "../language/LanguageTitle";
import { SongChordTitle } from "../songChord/SongChordTitle";

export const SongEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="artist.id" reference="Artist" label="Artist">
          <SelectInput optionText={ArtistTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="difficultyLevel.id"
          reference="DifficultyLevel"
          label="DifficultyLevel"
        >
          <SelectInput optionText={DifficultyLevelTitle} />
        </ReferenceInput>
        <ReferenceInput source="genre.id" reference="Genre" label="Genre">
          <SelectInput optionText={GenreTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="language.id"
          reference="Language"
          label="Language"
        >
          <SelectInput optionText={LanguageTitle} />
        </ReferenceInput>
        <TextInput label="lyrics" multiline source="lyrics" />
        <ReferenceArrayInput
          source="songChords"
          reference="SongChord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SongChordTitle} />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
