import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SeasonModel {
  @Field(type => ID)
  id: number;

  @Field()
  year: number | null;

  @Field()
  url: string | null;
}
