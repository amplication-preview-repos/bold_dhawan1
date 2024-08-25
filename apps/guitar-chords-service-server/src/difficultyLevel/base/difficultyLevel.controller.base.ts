/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DifficultyLevelService } from "../difficultyLevel.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DifficultyLevelCreateInput } from "./DifficultyLevelCreateInput";
import { DifficultyLevel } from "./DifficultyLevel";
import { DifficultyLevelFindManyArgs } from "./DifficultyLevelFindManyArgs";
import { DifficultyLevelWhereUniqueInput } from "./DifficultyLevelWhereUniqueInput";
import { DifficultyLevelUpdateInput } from "./DifficultyLevelUpdateInput";
import { SongFindManyArgs } from "../../song/base/SongFindManyArgs";
import { Song } from "../../song/base/Song";
import { SongWhereUniqueInput } from "../../song/base/SongWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DifficultyLevelControllerBase {
  constructor(
    protected readonly service: DifficultyLevelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DifficultyLevel })
  @nestAccessControl.UseRoles({
    resource: "DifficultyLevel",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: DifficultyLevelCreateInput,
  })
  async createDifficultyLevel(
    @common.Body() data: DifficultyLevelCreateInput
  ): Promise<DifficultyLevel> {
    return await this.service.createDifficultyLevel({
      data: data,
      select: {
        createdAt: true,
        id: true,
        level: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [DifficultyLevel] })
  @ApiNestedQuery(DifficultyLevelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DifficultyLevel",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async difficultyLevels(
    @common.Req() request: Request
  ): Promise<DifficultyLevel[]> {
    const args = plainToClass(DifficultyLevelFindManyArgs, request.query);
    return this.service.difficultyLevels({
      ...args,
      select: {
        createdAt: true,
        id: true,
        level: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DifficultyLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DifficultyLevel",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async difficultyLevel(
    @common.Param() params: DifficultyLevelWhereUniqueInput
  ): Promise<DifficultyLevel | null> {
    const result = await this.service.difficultyLevel({
      where: params,
      select: {
        createdAt: true,
        id: true,
        level: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DifficultyLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DifficultyLevel",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: DifficultyLevelUpdateInput,
  })
  async updateDifficultyLevel(
    @common.Param() params: DifficultyLevelWhereUniqueInput,
    @common.Body() data: DifficultyLevelUpdateInput
  ): Promise<DifficultyLevel | null> {
    try {
      return await this.service.updateDifficultyLevel({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          level: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: DifficultyLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DifficultyLevel",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDifficultyLevel(
    @common.Param() params: DifficultyLevelWhereUniqueInput
  ): Promise<DifficultyLevel | null> {
    try {
      return await this.service.deleteDifficultyLevel({
        where: params,
        select: {
          createdAt: true,
          id: true,
          level: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/songs")
  @ApiNestedQuery(SongFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Song",
    action: "read",
    possession: "any",
  })
  async findSongs(
    @common.Req() request: Request,
    @common.Param() params: DifficultyLevelWhereUniqueInput
  ): Promise<Song[]> {
    const query = plainToClass(SongFindManyArgs, request.query);
    const results = await this.service.findSongs(params.id, {
      ...query,
      select: {
        artist: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        difficultyLevel: {
          select: {
            id: true,
          },
        },

        genre: {
          select: {
            id: true,
          },
        },

        id: true,

        language: {
          select: {
            id: true,
          },
        },

        lyrics: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/songs")
  @nestAccessControl.UseRoles({
    resource: "DifficultyLevel",
    action: "update",
    possession: "any",
  })
  async connectSongs(
    @common.Param() params: DifficultyLevelWhereUniqueInput,
    @common.Body() body: SongWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      songs: {
        connect: body,
      },
    };
    await this.service.updateDifficultyLevel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/songs")
  @nestAccessControl.UseRoles({
    resource: "DifficultyLevel",
    action: "update",
    possession: "any",
  })
  async updateSongs(
    @common.Param() params: DifficultyLevelWhereUniqueInput,
    @common.Body() body: SongWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      songs: {
        set: body,
      },
    };
    await this.service.updateDifficultyLevel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/songs")
  @nestAccessControl.UseRoles({
    resource: "DifficultyLevel",
    action: "update",
    possession: "any",
  })
  async disconnectSongs(
    @common.Param() params: DifficultyLevelWhereUniqueInput,
    @common.Body() body: SongWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      songs: {
        disconnect: body,
      },
    };
    await this.service.updateDifficultyLevel({
      where: params,
      data,
      select: { id: true },
    });
  }
}