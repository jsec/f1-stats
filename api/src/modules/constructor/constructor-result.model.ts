import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ConstructorResultModel {
  @Field(type => ID)
  id: number;

  @Field()
  raceId: number | null;

  @Field()
  constructorId: number | null;

  @Field()
  points: number | null;

  @Field()
  statusId: number | null;
}
