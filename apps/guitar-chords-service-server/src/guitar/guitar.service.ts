import { Injectable } from "@nestjs/common";
import { SearchSongsInput } from "./SearchSongsInput";
import { SearchSongsOutput } from "./SearchSongsOutput";
import { TransposeChordsInput } from "./TransposeChordsInput";
import { TransposeChordsOutput } from "./TransposeChordsOutput";

@Injectable()
export class GuitarService {
  constructor() {}
  async SearchSongs(args: SearchSongsInput): Promise<SearchSongsOutput> {
    throw new Error("Not implemented");
  }
  async TransposeChords(args: TransposeChordsInput): Promise<TransposeChordsOutput> {
    throw new Error("Not implemented");
  }
}
