import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LoggerService {
  private readonly logger = new Logger(LoggerService.name);

  // Log informational messages
  logInfo(message: string, context?: string): void {
    this.logger.log(message, context || LoggerService.name);
  }

  // Log warnings
  logWarning(message: string, context?: string): void {
    this.logger.warn(message, context || LoggerService.name);
  }

  // Log errors
  logError(message: string, trace?: string, context?: string): void {
    this.logger.error(message, trace, context || LoggerService.name);
  }

  // Log debug information
  logDebug(message: string, context?: string): void {
    this.logger.debug(message, context || LoggerService.name);
  }

  // Log verbose information
  logVerbose(message: string, context?: string): void {
    this.logger.verbose(message, context || LoggerService.name);
  }
}
