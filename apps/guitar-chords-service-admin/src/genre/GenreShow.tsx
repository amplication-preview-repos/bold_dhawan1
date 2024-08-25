import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ARTIST_TITLE_FIELD } from "../artist/ArtistTitle";
import { DIFFICULTYLEVEL_TITLE_FIELD } from "../difficultyLevel/DifficultyLevelTitle";
import { GENRE_TITLE_FIELD } from "./GenreTitle";
import { LANGUAGE_TITLE_FIELD } from "../language/LanguageTitle";

export const GenreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Song" target="genreId" label="Songs">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Artist"
              source="artist.id"
              reference="Artist"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
