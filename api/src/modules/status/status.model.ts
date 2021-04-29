import {
  Field,
  ID,
  ObjectType
} from '@nestjs/graphql';

@ObjectType()
export class StatusModel {
  @Field((type) => ID)
  id: number;

  @Field()
  status: string;
}
