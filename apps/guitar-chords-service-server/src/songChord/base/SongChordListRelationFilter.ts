/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SongChordWhereInput } from "./SongChordWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SongChordListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SongChordWhereInput,
  })
  @ValidateNested()
  @Type(() => SongChordWhereInput)
  @IsOptional()
  @Field(() => SongChordWhereInput, {
    nullable: true,
  })
  every?: SongChordWhereInput;

  @ApiProperty({
    required: false,
    type: () => SongChordWhereInput,
  })
  @ValidateNested()
  @Type(() => SongChordWhereInput)
  @IsOptional()
  @Field(() => SongChordWhereInput, {
    nullable: true,
  })
  some?: SongChordWhereInput;

  @ApiProperty({
    required: false,
    type: () => SongChordWhereInput,
  })
  @ValidateNested()
  @Type(() => SongChordWhereInput)
  @IsOptional()
  @Field(() => SongChordWhereInput, {
    nullable: true,
  })
  none?: SongChordWhereInput;
}
export { SongChordListRelationFilter as SongChordListRelationFilter };