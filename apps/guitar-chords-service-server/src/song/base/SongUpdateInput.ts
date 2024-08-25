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
import { ArtistWhereUniqueInput } from "../../artist/base/ArtistWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { DifficultyLevelWhereUniqueInput } from "../../difficultyLevel/base/DifficultyLevelWhereUniqueInput";
import { GenreWhereUniqueInput } from "../../genre/base/GenreWhereUniqueInput";
import { LanguageWhereUniqueInput } from "../../language/base/LanguageWhereUniqueInput";
import { SongChordUpdateManyWithoutSongsInput } from "./SongChordUpdateManyWithoutSongsInput";

@InputType()
class SongUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ArtistWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ArtistWhereUniqueInput)
  @IsOptional()
  @Field(() => ArtistWhereUniqueInput, {
    nullable: true,
  })
  artist?: ArtistWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => DifficultyLevelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DifficultyLevelWhereUniqueInput)
  @IsOptional()
  @Field(() => DifficultyLevelWhereUniqueInput, {
    nullable: true,
  })
  difficultyLevel?: DifficultyLevelWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => GenreWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GenreWhereUniqueInput)
  @IsOptional()
  @Field(() => GenreWhereUniqueInput, {
    nullable: true,
  })
  genre?: GenreWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => LanguageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LanguageWhereUniqueInput)
  @IsOptional()
  @Field(() => LanguageWhereUniqueInput, {
    nullable: true,
  })
  language?: LanguageWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lyrics?: string | null;

  @ApiProperty({
    required: false,
    type: () => SongChordUpdateManyWithoutSongsInput,
  })
  @ValidateNested()
  @Type(() => SongChordUpdateManyWithoutSongsInput)
  @IsOptional()
  @Field(() => SongChordUpdateManyWithoutSongsInput, {
    nullable: true,
  })
  songChords?: SongChordUpdateManyWithoutSongsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { SongUpdateInput as SongUpdateInput };
