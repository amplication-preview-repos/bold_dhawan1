/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SongChordWhereInput } from "./SongChordWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SongChordOrderByInput } from "./SongChordOrderByInput";

@ArgsType()
class SongChordFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SongChordWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SongChordWhereInput, { nullable: true })
  @Type(() => SongChordWhereInput)
  where?: SongChordWhereInput;

  @ApiProperty({
    required: false,
    type: [SongChordOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SongChordOrderByInput], { nullable: true })
  @Type(() => SongChordOrderByInput)
  orderBy?: Array<SongChordOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SongChordFindManyArgs as SongChordFindManyArgs };