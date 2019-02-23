import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Environment } from './environment';
import { EnvironmentType } from './environment-type.enum';

export class EnvironmentData implements InMemoryDbService {
  // constructor(private et: EnvironmentType) {
  // }
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
        id: 2,
        name: 'Engage 123',
        type: EnvironmentType.Sentinel,
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
      },
      {
        id: 3,
        name: 'Sentinel 6.7 local DB',
        type: EnvironmentType.Engage,
        version: '6.7',
        servers: [
          {
            hostname: 'CFT-SENT-188',
            ip: '10.128.56.188'
          }
        ],
        lastOperation: 'HF install',
        ciResult: 'passed'
      },
      {
        id: 4,
        name: 'Engage CFT-CM',
        type: EnvironmentType.Sentinel,
        version: '6.4.0',
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
      },
      {
        id: 5,
        name: 'Sentinel Remote DB',
        type: EnvironmentType.Engage,
        version: '6.10',
        servers: [
          {
            hostname: 'CFT-SENT-140',
            ip: '10.128.41.140'
          },
          {
            hostname: 'CFT-DB-139',
            ip: '10.128.57.139'
          }
        ],
        lastOperation: 'Update',
        ciResult: 'passed'
      },
      {
        id: 6,
        name: 'Engage 6.12 Ira',
        type: EnvironmentType.Sentinel,
        version: '6.12.2',
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
        ciResult: 'none'
      }
    ];
    return { environments };
  }
}
