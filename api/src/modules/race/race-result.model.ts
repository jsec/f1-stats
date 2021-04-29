import {
  Field,
  ID,
  Int,
  ObjectType
} from '@nestjs/graphql';

@ObjectType()
export class RaceResultModel {
  @Field((type) => ID)
  id: number;

  @Field()
  raceId: number;

  @Field()
  driverId: number;

  @Field()
  constructorId: number;

  @Field(() => Int, { nullable: true })
  number?: number | null;

  @Field(() => Int, { nullable: true })
  grid?: number | null;

  @Field(() => Int, { nullable: true })
  position?: number | null;

  @Field()
  positionText: string;

  @Field()
  positionOrder: number;

  @Field()
  points: number;

  @Field()
  laps: number;

  @Field(() => String, { nullable: true })
  time?: string | null;

  @Field(() => Int, { nullable: true })
  milliseconds?: number | null;

  @Field(() => Int, { nullable: true })
  fastestLap?: number | null;

  @Field(() => Int, { nullable: true })
  fastestLapRank?: number | null;

  @Field(() => Date, { nullable: true })
  fastestLapTime?: Date | null;

  @Field(() => Int, { nullable: true })
  fastestLapSpeed?: number | null;

  @Field()
  statusId: number;
}
