import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkerService {
  getWorkerData() {
    return 'Worker data from the worker service';
  }
}
