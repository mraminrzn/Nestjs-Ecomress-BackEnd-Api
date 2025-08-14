import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataBaseInit } from './typeOrm/Module.orm';
import session from 'express-session';
import { UserModule } from './services/user/user.module';
import { GenerateUserRequest } from './common/middleware/auth.middleware';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './routers/auth/auth.module';
import { AdminModule } from './routers/admin/admin.module';
import { ProductModule } from './routers/product/product.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'files'),
      serveRoot: '/files',
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DataBaseInit,
    AuthModule,
    UserModule,
    AdminModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          secret: process.env.SESSION_SECRET ?? 'mamad138412345',
          resave: false,
          saveUninitialized: false,
        }),
      )
      .forRoutes('*');

    consumer.apply(GenerateUserRequest).forRoutes('*');
  }
}
