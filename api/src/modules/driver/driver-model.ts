import {
 Field, ID, Int, ObjectType
} from '@nestjs/graphql';

@ObjectType()
export class DriverModel {
  @Field(type => ID)
  id: number;

  @Field()
  ref: string;

  @Field(() => Int, { nullable: true })
  number?: number | null;

  @Field()
  code: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  dob: Date;

  @Field()
  nationality: string;

  @Field()
  url: string;
}
