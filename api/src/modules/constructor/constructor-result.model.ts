import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ConstructorResultModel {
  @Field(type => ID)
  id: number;

  @Field()
  raceId: number;

  @Field()
  constructorId: number;

  @Field()
  points: number;

  @Field()
  statusId: number;
}
