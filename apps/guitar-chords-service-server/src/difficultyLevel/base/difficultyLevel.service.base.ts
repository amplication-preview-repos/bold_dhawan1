/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  DifficultyLevel as PrismaDifficultyLevel,
  Song as PrismaSong,
} from "@prisma/client";

export class DifficultyLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DifficultyLevelCountArgs, "select">
  ): Promise<number> {
    return this.prisma.difficultyLevel.count(args);
  }

  async difficultyLevels(
    args: Prisma.DifficultyLevelFindManyArgs
  ): Promise<PrismaDifficultyLevel[]> {
    return this.prisma.difficultyLevel.findMany(args);
  }
  async difficultyLevel(
    args: Prisma.DifficultyLevelFindUniqueArgs
  ): Promise<PrismaDifficultyLevel | null> {
    return this.prisma.difficultyLevel.findUnique(args);
  }
  async createDifficultyLevel(
    args: Prisma.DifficultyLevelCreateArgs
  ): Promise<PrismaDifficultyLevel> {
    return this.prisma.difficultyLevel.create(args);
  }
  async updateDifficultyLevel(
    args: Prisma.DifficultyLevelUpdateArgs
  ): Promise<PrismaDifficultyLevel> {
    return this.prisma.difficultyLevel.update(args);
  }
  async deleteDifficultyLevel(
    args: Prisma.DifficultyLevelDeleteArgs
  ): Promise<PrismaDifficultyLevel> {
    return this.prisma.difficultyLevel.delete(args);
  }

  async findSongs(
    parentId: string,
    args: Prisma.SongFindManyArgs
  ): Promise<PrismaSong[]> {
    return this.prisma.difficultyLevel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .songs(args);
  }
}