import { Model } from 'objection';

export class BaseModel extends Model {
  id!: string;

  static relationMappings = {};
}
