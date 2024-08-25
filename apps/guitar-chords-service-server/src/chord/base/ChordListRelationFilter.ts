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
import { ChordWhereInput } from "./ChordWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ChordListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ChordWhereInput,
  })
  @ValidateNested()
  @Type(() => ChordWhereInput)
  @IsOptional()
  @Field(() => ChordWhereInput, {
    nullable: true,
  })
  every?: ChordWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChordWhereInput,
  })
  @ValidateNested()
  @Type(() => ChordWhereInput)
  @IsOptional()
  @Field(() => ChordWhereInput, {
    nullable: true,
  })
  some?: ChordWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChordWhereInput,
  })
  @ValidateNested()
  @Type(() => ChordWhereInput)
  @IsOptional()
  @Field(() => ChordWhereInput, {
    nullable: true,
  })
  none?: ChordWhereInput;
}
export { ChordListRelationFilter as ChordListRelationFilter };
