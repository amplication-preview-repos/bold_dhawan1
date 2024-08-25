import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChordService } from "./chord.service";
import { ChordControllerBase } from "./base/chord.controller.base";

@swagger.ApiTags("chords")
@common.Controller("chords")
export class ChordController extends ChordControllerBase {
  constructor(
    protected readonly service: ChordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
