import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RaceModel {
  @Field(type => ID)
  id: number;

  @Field()
  year: number;

  @Field()
  round: number;

  @Field()
  circuitId: number;

  @Field()
  name: string;

  @Field()
  date: Date;

  @Field(() => Date, { nullable: true })
  time?: Date | null;

  @Field()
  url: string;
}
