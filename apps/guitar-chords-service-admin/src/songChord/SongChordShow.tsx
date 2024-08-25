import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CHORD_TITLE_FIELD } from "../chord/ChordTitle";
import { SONG_TITLE_FIELD } from "../song/SongTitle";

export const SongChordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
