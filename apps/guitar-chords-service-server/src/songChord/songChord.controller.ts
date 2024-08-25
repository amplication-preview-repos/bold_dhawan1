import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SongChordService } from "./songChord.service";
import { SongChordControllerBase } from "./base/songChord.controller.base";

@swagger.ApiTags("songChords")
@common.Controller("songChords")
export class SongChordController extends SongChordControllerBase {
  constructor(
    protected readonly service: SongChordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
