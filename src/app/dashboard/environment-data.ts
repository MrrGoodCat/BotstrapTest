import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Environment } from './environment';
import { EnvironmentType } from './environment-type.enum';

export class EnvironmentData implements InMemoryDbService, InMemoryBackendConfig {
  constructor(private et: EnvironmentType) {
  }
  createDb() {
    const environments: Environment[] = [
      {
        id: 1,
        name: 'Engage UHG Performance',
        type: EnvironmentType.Engage,
        version: '6.6.5',
        servers: [
          {
            hostname: 'app-123',
            ip: '10.128.32.123'
          },
          {
            hostname: 'dbdm-98',
            ip: '10.128.32.98'
          }
        ],
        lastOperation: 'SP install',
        ciResult: 'passed'
      },
      {
        id: 1,
        name: 'Engage 123',
        type: EnvironmentType.Engage,
        version: '6.7.0',
        servers: [
          {
            hostname: 'app-123',
            ip: '10.128.32.123'
          },
          {
            hostname: 'dbdm-98',
            ip: '10.128.32.98'
          }
        ],
        lastOperation: 'snapshot',
        ciResult: 'none'
      }
    ];
    return { environments };
  }
}
