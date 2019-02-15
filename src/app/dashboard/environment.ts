import { EnvironmentType } from './environment-type.enum';
import { Server } from './server';

export interface Environment {
  name: string;
  type: EnvironmentType;
  version: string;
  lastActivityDate: Date;
  servers: Server[];
}
