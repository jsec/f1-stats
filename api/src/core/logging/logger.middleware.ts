import {
  Injectable,
  NestMiddleware
} from '@nestjs/common';
import {
  NextFunction,
  Request,
  Response
} from 'express';
import morgan from 'morgan';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    morgan('dev')(req, res, next);
  }
}
