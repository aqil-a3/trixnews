import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class SharedSecretGuardService implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    
    const clientSecret = req.headers['x-auth-secret'];
    const serverSecret = process.env.SHARED_SECRET;

    if (!clientSecret || serverSecret !== clientSecret) {
      throw new UnauthorizedException('Invalid key');
    }

    return true;
  }
}
