import {
  Field,
  ID,
  ObjectType
} from '@nestjs/graphql';

@ObjectType()
export class ConstructorModel {
  @Field((type) => ID)
  id: number;

  @Field()
  ref: string;

  @Field()
  name: string;

  @Field()
  nationality: string;

  @Field()
  url: string;
}
