import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
  getSharedData(): string {
    return 'Shared data from the shared service';
  }
}
