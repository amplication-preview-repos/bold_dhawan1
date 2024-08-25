import { Module } from "@nestjs/common";
import { SongModule } from "./song/song.module";
import { ArtistModule } from "./artist/artist.module";
import { GenreModule } from "./genre/genre.module";
import { LanguageModule } from "./language/language.module";
import { SongChordModule } from "./songChord/songChord.module";
import { ChordModule } from "./chord/chord.module";
import { DifficultyLevelModule } from "./difficultyLevel/difficultyLevel.module";
import { UserModule } from "./user/user.module";
import { GuitarModule } from "./guitar/guitar.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    SongModule,
    ArtistModule,
    GenreModule,
    LanguageModule,
    SongChordModule,
    ChordModule,
    DifficultyLevelModule,
    UserModule,
    GuitarModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
