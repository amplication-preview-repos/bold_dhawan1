import { ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("SearchSongsOutputObject")
class SearchSongsOutput {
    @Field(() => [GraphQLJSON])
    songs!: InputJsonValue;
}

export { SearchSongsOutput as SearchSongsOutput };