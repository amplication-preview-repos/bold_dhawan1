import * as graphql from "@nestjs/graphql";
import { SearchSongsInput } from "./SearchSongsInput";
import { SearchSongsOutput } from "./SearchSongsOutput";
import { TransposeChordsInput } from "./TransposeChordsInput";
import { TransposeChordsOutput } from "./TransposeChordsOutput";
import { GuitarService } from "./guitar.service";

export class GuitarResolver {
  constructor(protected readonly service: GuitarService) {}

  @graphql.Query(() => SearchSongsOutput)
  async SearchSongs(
    @graphql.Args()
    args: SearchSongsInput
  ): Promise<SearchSongsOutput> {
    return this.service.SearchSongs(args);
  }

  @graphql.Mutation(() => TransposeChordsOutput)
  async TransposeChords(
    @graphql.Args()
    args: TransposeChordsInput
  ): Promise<TransposeChordsOutput> {
    return this.service.TransposeChords(args);
  }
}
