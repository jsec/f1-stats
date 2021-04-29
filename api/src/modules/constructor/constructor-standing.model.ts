import {
  Field,
  ID,
  ObjectType
} from '@nestjs/graphql';

@ObjectType()
export class ConstructorStandingModel {
  @Field((type) => ID)
  id: number;

  @Field()
  raceId: number;

  @Field()
  constructorId: number;

  @Field()
  points: number;

  @Field()
  position: number;

  @Field()
  positionText: string;

  @Field()
  wins: number;
}
