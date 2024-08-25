import { Module } from "@nestjs/common";
import { GuitarService } from "./guitar.service";
import { GuitarController } from "./guitar.controller";
import { GuitarResolver } from "./guitar.resolver";

@Module({
  controllers: [GuitarController],
  providers: [GuitarService, GuitarResolver],
  exports: [GuitarService],
})
export class GuitarModule {}
