import {
  Field,
  ID,
  ObjectType
} from '@nestjs/graphql';

@ObjectType()
export class CircuitModel {
  @Field((type) => ID)
  id: number;

  @Field()
  ref: string;

  @Field()
  name: string;

  @Field()
  country: string;

  @Field()
  latitude: number;

  @Field()
  longitude: number;

  @Field()
  alt: string;

  @Field()
  url: string;
}
