import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SongChordModuleBase } from "./base/songChord.module.base";
import { SongChordService } from "./songChord.service";
import { SongChordController } from "./songChord.controller";
import { SongChordResolver } from "./songChord.resolver";

@Module({
  imports: [SongChordModuleBase, forwardRef(() => AuthModule)],
  controllers: [SongChordController],
  providers: [SongChordService, SongChordResolver],
  exports: [SongChordService],
})
export class SongChordModule {}
