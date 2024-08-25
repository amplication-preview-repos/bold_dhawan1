import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SongModuleBase } from "./base/song.module.base";
import { SongService } from "./song.service";
import { SongController } from "./song.controller";
import { SongResolver } from "./song.resolver";

@Module({
  imports: [SongModuleBase, forwardRef(() => AuthModule)],
  controllers: [SongController],
  providers: [SongService, SongResolver],
  exports: [SongService],
})
export class SongModule {}
