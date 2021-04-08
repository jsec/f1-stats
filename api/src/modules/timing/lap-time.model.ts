import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LapTimeModel {
  @Field(type => ID)
  id: number;

  @Field()
  raceId: number;

  @Field()
  driverId: number;

  @Field()
  lap: number;

  @Field()
  position: number;

  @Field()
  time: Date;

  @Field()
  milliseconds: number;
}
