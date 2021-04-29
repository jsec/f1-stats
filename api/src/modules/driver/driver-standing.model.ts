import {
  Field,
  ID,
  Int,
  ObjectType
} from '@nestjs/graphql';

@ObjectType()
export class DriverStandingModel {
  @Field((type) => ID)
  id: number;

  @Field()
  raceId: number;

  @Field()
  driverId: number;

  @Field(() => Int, { nullable: true })
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
