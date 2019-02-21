import { EnvironmentType } from './environment-type.enum';
import { Server } from './server';

export interface Environment {
  id: number;
  name: string;
  // type: EnvironmentType;
  // version: string;
  // servers: Server[];
  // lastOperation: string;
  // ciResult: string;
}
