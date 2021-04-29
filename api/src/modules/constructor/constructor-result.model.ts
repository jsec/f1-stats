import {
  Field,
  ID,
  Int,
  ObjectType
} from '@nestjs/graphql';

@ObjectType()
export class ConstructorResultModel {
  @Field((type) => ID)
  id: number;

  @Field(() => Int, { nullable: true })
  raceId?: number | null;

  @Field(() => Int, { nullable: true })
  constructorId?: number | null;

  @Field(() => Int, { nullable: true })
  points?: number | null;

  @Field(() => Int, { nullable: true })
  statusId?: number | null;
}
