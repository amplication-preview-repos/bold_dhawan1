import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChordModuleBase } from "./base/chord.module.base";
import { ChordService } from "./chord.service";
import { ChordController } from "./chord.controller";
import { ChordResolver } from "./chord.resolver";

@Module({
  imports: [ChordModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChordController],
  providers: [ChordService, ChordResolver],
  exports: [ChordService],
})
export class ChordModule {}
