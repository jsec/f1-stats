import {
  Field,
  ID,
  ObjectType
} from '@nestjs/graphql';

@ObjectType()
export class QualificationModel {
  @Field((type) => ID)
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

  @Field(() => Date, { nullable: true })
  q1: Date | null;

  @Field(() => Date, { nullable: true })
  q2: Date | null;

  @Field(() => Date, { nullable: true })
  q3: Date | null;
}
