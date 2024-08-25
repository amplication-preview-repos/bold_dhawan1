import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DifficultyLevelService } from "./difficultyLevel.service";
import { DifficultyLevelControllerBase } from "./base/difficultyLevel.controller.base";

@swagger.ApiTags("difficultyLevels")
@common.Controller("difficultyLevels")
export class DifficultyLevelController extends DifficultyLevelControllerBase {
  constructor(
    protected readonly service: DifficultyLevelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
