import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express'; // <-- Added Response
import { UserService } from 'src/services/user/user.service';
import { User } from 'src/typeOrm/Schemas/User.entity';

// It's good practice to create a separate declaration file (e.g., `src/types/express.d.ts`)
// for this global type augmentation.
declare global {
  namespace Express {
    interface Request {
      user?: User | null;
    }
  }
}

declare module 'express-session' {
  interface SessionData {
    userId?: string;
  }
}

@Injectable()
export class GenerateUserRequest implements NestMiddleware {
  // Corrected property name to follow camelCase convention
  constructor(private readonly userService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    // Correctly handle the case where `req.session` or `req.session.userId` doesn't exist
    const { userId } = req.session || {};

    if (userId) {
      // The `findById` method is correct, assuming your `UserService` has it.
      const foundUser = await this.userService.findById(+userId);
      req.user = foundUser ?? null;
    } else {
      // It's a good idea to explicitly set req.user to null if no user ID is found
      req.user = null;
    }

    next();
  }
}
