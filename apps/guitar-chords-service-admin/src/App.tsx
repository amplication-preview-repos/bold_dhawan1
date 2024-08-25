import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SongList } from "./song/SongList";
import { SongCreate } from "./song/SongCreate";
import { SongEdit } from "./song/SongEdit";
import { SongShow } from "./song/SongShow";
import { ArtistList } from "./artist/ArtistList";
import { ArtistCreate } from "./artist/ArtistCreate";
import { ArtistEdit } from "./artist/ArtistEdit";
import { ArtistShow } from "./artist/ArtistShow";
import { GenreList } from "./genre/GenreList";
import { GenreCreate } from "./genre/GenreCreate";
import { GenreEdit } from "./genre/GenreEdit";
import { GenreShow } from "./genre/GenreShow";
import { LanguageList } from "./language/LanguageList";
import { LanguageCreate } from "./language/LanguageCreate";
import { LanguageEdit } from "./language/LanguageEdit";
import { LanguageShow } from "./language/LanguageShow";
import { SongChordList } from "./songChord/SongChordList";
import { SongChordCreate } from "./songChord/SongChordCreate";
import { SongChordEdit } from "./songChord/SongChordEdit";
import { SongChordShow } from "./songChord/SongChordShow";
import { ChordList } from "./chord/ChordList";
import { ChordCreate } from "./chord/ChordCreate";
import { ChordEdit } from "./chord/ChordEdit";
import { ChordShow } from "./chord/ChordShow";
import { DifficultyLevelList } from "./difficultyLevel/DifficultyLevelList";
import { DifficultyLevelCreate } from "./difficultyLevel/DifficultyLevelCreate";
import { DifficultyLevelEdit } from "./difficultyLevel/DifficultyLevelEdit";
import { DifficultyLevelShow } from "./difficultyLevel/DifficultyLevelShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GuitarChordsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Song"
          list={SongList}
          edit={SongEdit}
          create={SongCreate}
          show={SongShow}
        />
        <Resource
          name="Artist"
          list={ArtistList}
          edit={ArtistEdit}
          create={ArtistCreate}
          show={ArtistShow}
        />
        <Resource
          name="Genre"
          list={GenreList}
          edit={GenreEdit}
          create={GenreCreate}
          show={GenreShow}
        />
        <Resource
          name="Language"
          list={LanguageList}
          edit={LanguageEdit}
          create={LanguageCreate}
          show={LanguageShow}
        />
        <Resource
          name="SongChord"
          list={SongChordList}
          edit={SongChordEdit}
          create={SongChordCreate}
          show={SongChordShow}
        />
        <Resource
          name="Chord"
          list={ChordList}
          edit={ChordEdit}
          create={ChordCreate}
          show={ChordShow}
        />
        <Resource
          name="DifficultyLevel"
          list={DifficultyLevelList}
          edit={DifficultyLevelEdit}
          create={DifficultyLevelCreate}
          show={DifficultyLevelShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
