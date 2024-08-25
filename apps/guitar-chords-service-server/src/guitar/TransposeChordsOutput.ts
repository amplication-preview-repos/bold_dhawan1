import { ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("TransposeChordsOutputObject")
class TransposeChordsOutput {
    @Field(() => GraphQLJSON)
    transposedChords!: InputJsonValue;
}

export { TransposeChordsOutput as TransposeChordsOutput };