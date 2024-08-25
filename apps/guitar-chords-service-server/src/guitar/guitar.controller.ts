import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GuitarService } from "./guitar.service";
import { TransposeChordsInput } from "./TransposeChordsInput";
import { SearchSongsOutput } from "./SearchSongsOutput";
import { TransposeChordsOutput } from "./TransposeChordsOutput";

@swagger.ApiTags("guitars")
@common.Controller("guitars")
export class GuitarController {
  constructor(protected readonly service: GuitarService) {}

  @common.Get("/search-songs")
  @swagger.ApiOkResponse({
    type: SearchSongsOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SearchSongs(
    @common.Body()
    body: TransposeChordsInput
  ): Promise<SearchSongsOutput> {
        return this.service.SearchSongs(body);
      }

  @common.Post("/transpose-chords")
  @swagger.ApiOkResponse({
    type: TransposeChordsOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TransposeChords(
    @common.Body()
    body: TransposeChordsInput
  ): Promise<TransposeChordsOutput> {
        return this.service.TransposeChords(body);
      }
}
