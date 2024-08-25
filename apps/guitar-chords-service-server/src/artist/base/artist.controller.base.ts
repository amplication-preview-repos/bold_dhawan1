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
import { ArtistService } from "../artist.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ArtistCreateInput } from "./ArtistCreateInput";
import { Artist } from "./Artist";
import { ArtistFindManyArgs } from "./ArtistFindManyArgs";
import { ArtistWhereUniqueInput } from "./ArtistWhereUniqueInput";
import { ArtistUpdateInput } from "./ArtistUpdateInput";
import { SongFindManyArgs } from "../../song/base/SongFindManyArgs";
import { Song } from "../../song/base/Song";
import { SongWhereUniqueInput } from "../../song/base/SongWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ArtistControllerBase {
  constructor(
    protected readonly service: ArtistService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Artist })
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ArtistCreateInput,
  })
  async createArtist(@common.Body() data: ArtistCreateInput): Promise<Artist> {
    return await this.service.createArtist({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Artist] })
  @ApiNestedQuery(ArtistFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async artists(@common.Req() request: Request): Promise<Artist[]> {
    const args = plainToClass(ArtistFindManyArgs, request.query);
    return this.service.artists({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Artist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async artist(
    @common.Param() params: ArtistWhereUniqueInput
  ): Promise<Artist | null> {
    const result = await this.service.artist({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Artist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ArtistUpdateInput,
  })
  async updateArtist(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() data: ArtistUpdateInput
  ): Promise<Artist | null> {
    try {
      return await this.service.updateArtist({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Artist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteArtist(
    @common.Param() params: ArtistWhereUniqueInput
  ): Promise<Artist | null> {
    try {
      return await this.service.deleteArtist({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
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
    @common.Param() params: ArtistWhereUniqueInput
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
    resource: "Artist",
    action: "update",
    possession: "any",
  })
  async connectSongs(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: SongWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      songs: {
        connect: body,
      },
    };
    await this.service.updateArtist({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/songs")
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "update",
    possession: "any",
  })
  async updateSongs(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: SongWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      songs: {
        set: body,
      },
    };
    await this.service.updateArtist({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/songs")
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "update",
    possession: "any",
  })
  async disconnectSongs(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: SongWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      songs: {
        disconnect: body,
      },
    };
    await this.service.updateArtist({
      where: params,
      data,
      select: { id: true },
    });
  }
}
