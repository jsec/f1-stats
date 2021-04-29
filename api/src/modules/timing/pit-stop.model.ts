import {
  Field,
  ID,
  ObjectType
} from '@nestjs/graphql';

@ObjectType()
export class PitStopModel {
  @Field((type) => ID)
  id: number;

  @Field()
  raceId: number;

  @Field()
  driverId: number;

  @Field()
  stop: number;

  @Field()
  lap: number;

  @Field()
  time: Date;

  @Field()
  duration: number;

  @Field()
  milliseconds: number;
}
