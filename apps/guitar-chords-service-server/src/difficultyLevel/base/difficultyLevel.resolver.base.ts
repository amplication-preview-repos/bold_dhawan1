/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { DifficultyLevel } from "./DifficultyLevel";
import { DifficultyLevelCountArgs } from "./DifficultyLevelCountArgs";
import { DifficultyLevelFindManyArgs } from "./DifficultyLevelFindManyArgs";
import { DifficultyLevelFindUniqueArgs } from "./DifficultyLevelFindUniqueArgs";
import { CreateDifficultyLevelArgs } from "./CreateDifficultyLevelArgs";
import { UpdateDifficultyLevelArgs } from "./UpdateDifficultyLevelArgs";
import { DeleteDifficultyLevelArgs } from "./DeleteDifficultyLevelArgs";
import { SongFindManyArgs } from "../../song/base/SongFindManyArgs";
import { Song } from "../../song/base/Song";
import { DifficultyLevelService } from "../difficultyLevel.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DifficultyLevel)
export class DifficultyLevelResolverBase {
  constructor(
    protected readonly service: DifficultyLevelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DifficultyLevel",
    action: "read",
    possession: "any",
  })
  async _difficultyLevelsMeta(
    @graphql.Args() args: DifficultyLevelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DifficultyLevel])
  @nestAccessControl.UseRoles({
    resource: "DifficultyLevel",
    action: "read",
    possession: "any",
  })
  async difficultyLevels(
    @graphql.Args() args: DifficultyLevelFindManyArgs
  ): Promise<DifficultyLevel[]> {
    return this.service.difficultyLevels(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DifficultyLevel, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DifficultyLevel",
    action: "read",
    possession: "own",
  })
  async difficultyLevel(
    @graphql.Args() args: DifficultyLevelFindUniqueArgs
  ): Promise<DifficultyLevel | null> {
    const result = await this.service.difficultyLevel(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DifficultyLevel)
  @nestAccessControl.UseRoles({
    resource: "DifficultyLevel",
    action: "create",
    possession: "any",
  })
  async createDifficultyLevel(
    @graphql.Args() args: CreateDifficultyLevelArgs
  ): Promise<DifficultyLevel> {
    return await this.service.createDifficultyLevel({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DifficultyLevel)
  @nestAccessControl.UseRoles({
    resource: "DifficultyLevel",
    action: "update",
    possession: "any",
  })
  async updateDifficultyLevel(
    @graphql.Args() args: UpdateDifficultyLevelArgs
  ): Promise<DifficultyLevel | null> {
    try {
      return await this.service.updateDifficultyLevel({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DifficultyLevel)
  @nestAccessControl.UseRoles({
    resource: "DifficultyLevel",
    action: "delete",
    possession: "any",
  })
  async deleteDifficultyLevel(
    @graphql.Args() args: DeleteDifficultyLevelArgs
  ): Promise<DifficultyLevel | null> {
    try {
      return await this.service.deleteDifficultyLevel(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Song], { name: "songs" })
  @nestAccessControl.UseRoles({
    resource: "Song",
    action: "read",
    possession: "any",
  })
  async findSongs(
    @graphql.Parent() parent: DifficultyLevel,
    @graphql.Args() args: SongFindManyArgs
  ): Promise<Song[]> {
    const results = await this.service.findSongs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
