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
import { Chord } from "./Chord";
import { ChordCountArgs } from "./ChordCountArgs";
import { ChordFindManyArgs } from "./ChordFindManyArgs";
import { ChordFindUniqueArgs } from "./ChordFindUniqueArgs";
import { CreateChordArgs } from "./CreateChordArgs";
import { UpdateChordArgs } from "./UpdateChordArgs";
import { DeleteChordArgs } from "./DeleteChordArgs";
import { SongChordFindManyArgs } from "../../songChord/base/SongChordFindManyArgs";
import { SongChord } from "../../songChord/base/SongChord";
import { ChordService } from "../chord.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Chord)
export class ChordResolverBase {
  constructor(
    protected readonly service: ChordService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Chord",
    action: "read",
    possession: "any",
  })
  async _chordsMeta(
    @graphql.Args() args: ChordCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Chord])
  @nestAccessControl.UseRoles({
    resource: "Chord",
    action: "read",
    possession: "any",
  })
  async chords(@graphql.Args() args: ChordFindManyArgs): Promise<Chord[]> {
    return this.service.chords(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Chord, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Chord",
    action: "read",
    possession: "own",
  })
  async chord(
    @graphql.Args() args: ChordFindUniqueArgs
  ): Promise<Chord | null> {
    const result = await this.service.chord(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Chord)
  @nestAccessControl.UseRoles({
    resource: "Chord",
    action: "create",
    possession: "any",
  })
  async createChord(@graphql.Args() args: CreateChordArgs): Promise<Chord> {
    return await this.service.createChord({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Chord)
  @nestAccessControl.UseRoles({
    resource: "Chord",
    action: "update",
    possession: "any",
  })
  async updateChord(
    @graphql.Args() args: UpdateChordArgs
  ): Promise<Chord | null> {
    try {
      return await this.service.updateChord({
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

  @graphql.Mutation(() => Chord)
  @nestAccessControl.UseRoles({
    resource: "Chord",
    action: "delete",
    possession: "any",
  })
  async deleteChord(
    @graphql.Args() args: DeleteChordArgs
  ): Promise<Chord | null> {
    try {
      return await this.service.deleteChord(args);
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
  @graphql.ResolveField(() => [SongChord], { name: "songChords" })
  @nestAccessControl.UseRoles({
    resource: "SongChord",
    action: "read",
    possession: "any",
  })
  async findSongChords(
    @graphql.Parent() parent: Chord,
    @graphql.Args() args: SongChordFindManyArgs
  ): Promise<SongChord[]> {
    const results = await this.service.findSongChords(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
