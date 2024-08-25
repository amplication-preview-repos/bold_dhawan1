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

import { CHORD_TITLE_FIELD } from "./ChordTitle";
import { SONG_TITLE_FIELD } from "../song/SongTitle";

export const ChordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="diagram" source="diagram" />
        <TextField label="fingerPositions" source="fingerPositions" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SongChord"
          target="chordId"
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
