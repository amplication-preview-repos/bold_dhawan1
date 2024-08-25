import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CHORD_TITLE_FIELD } from "../chord/ChordTitle";
import { SONG_TITLE_FIELD } from "./SongTitle";
import { ARTIST_TITLE_FIELD } from "../artist/ArtistTitle";
import { DIFFICULTYLEVEL_TITLE_FIELD } from "../difficultyLevel/DifficultyLevelTitle";
import { GENRE_TITLE_FIELD } from "../genre/GenreTitle";
import { LANGUAGE_TITLE_FIELD } from "../language/LanguageTitle";

export const SongShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Artist" source="artist.id" reference="Artist">
          <TextField source={ARTIST_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="DifficultyLevel"
          source="difficultylevel.id"
          reference="DifficultyLevel"
        >
          <TextField source={DIFFICULTYLEVEL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Genre" source="genre.id" reference="Genre">
          <TextField source={GENRE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Language"
          source="language.id"
          reference="Language"
        >
          <TextField source={LANGUAGE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="lyrics" source="lyrics" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SongChord"
          target="songId"
          label="SongChords"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Chord" source="chord.id" reference="Chord">
              <TextField source={CHORD_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="position" source="position" />
            <ReferenceField label="Song" source="song.id" reference="Song">
              <TextField source={SONG_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
