import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ARTIST_TITLE_FIELD } from "../artist/ArtistTitle";
import { DIFFICULTYLEVEL_TITLE_FIELD } from "../difficultyLevel/DifficultyLevelTitle";
import { GENRE_TITLE_FIELD } from "../genre/GenreTitle";
import { LANGUAGE_TITLE_FIELD } from "../language/LanguageTitle";

export const SongList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Songs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
