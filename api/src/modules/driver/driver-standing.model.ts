import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DriverStandingModel {
  @Field(type => ID)
  id: number;

  @Field()
  raceId: number;

  @Field()
  driverId: number;

  @Field()
  constructorId: number | null;

  @Field()
  points: number;

  @Field()
  position: number;

  @Field()
  positionText: string;

  @Field()
  wins: number;
}
