import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DifficultyLevelServiceBase } from "./base/difficultyLevel.service.base";

@Injectable()
export class DifficultyLevelService extends DifficultyLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
