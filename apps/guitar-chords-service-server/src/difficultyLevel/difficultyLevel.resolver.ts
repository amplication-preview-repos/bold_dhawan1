import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DifficultyLevelResolverBase } from "./base/difficultyLevel.resolver.base";
import { DifficultyLevel } from "./base/DifficultyLevel";
import { DifficultyLevelService } from "./difficultyLevel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DifficultyLevel)
export class DifficultyLevelResolver extends DifficultyLevelResolverBase {
  constructor(
    protected readonly service: DifficultyLevelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
