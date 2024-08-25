import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChordServiceBase } from "./base/chord.service.base";

@Injectable()
export class ChordService extends ChordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
