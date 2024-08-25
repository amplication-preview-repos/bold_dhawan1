import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SongChordServiceBase } from "./base/songChord.service.base";

@Injectable()
export class SongChordService extends SongChordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
