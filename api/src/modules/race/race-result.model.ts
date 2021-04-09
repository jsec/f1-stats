import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RaceResultModel {
  @Field(type => ID)
  id: number;

  @Field()
  raceId: number;

  @Field()
  driverId: number;

  @Field()
  constructorId: number;

  @Field()
  number: number | null;

  @Field()
  grid: number | null;

  @Field()
  position: number | null;

  @Field()
  positionText: string;

  @Field()
  positionOrder: number;

  @Field()
  points: number;

  @Field()
  laps: number;

  @Field()
  time: string | null;

  @Field()
  milliseconds: number | null;

  @Field()
  fastestLap: number | null;

  @Field()
  fastestLapRank: number | null;

  @Field()
  fastestLapTime: Date | null;

  @Field()
  fastestLapSpeed: number | null;

  @Field()
  statusId: number;
}
