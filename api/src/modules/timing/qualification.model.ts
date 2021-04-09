import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class QualificationModel {
  @Field(type => ID)
  id: number;

  @Field()
  raceId: number;

  @Field()
  driverId: number;

  @Field()
  constructorId: number;

  @Field()
  number: number;

  @Field()
  position: number;

  @Field()
  q1: Date | null;

  @Field()
  q2: Date | null;

  @Field()
  q3: Date | null;
}
