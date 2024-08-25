import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DifficultyLevelModuleBase } from "./base/difficultyLevel.module.base";
import { DifficultyLevelService } from "./difficultyLevel.service";
import { DifficultyLevelController } from "./difficultyLevel.controller";
import { DifficultyLevelResolver } from "./difficultyLevel.resolver";

@Module({
  imports: [DifficultyLevelModuleBase, forwardRef(() => AuthModule)],
  controllers: [DifficultyLevelController],
  providers: [DifficultyLevelService, DifficultyLevelResolver],
  exports: [DifficultyLevelService],
})
export class DifficultyLevelModule {}
