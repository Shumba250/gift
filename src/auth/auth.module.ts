import { Module } from '@nestjs/common';
import { AuthControllerV1 } from './v1/controllers/auth.v1.controller';
import { AuthService } from './v1/services/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({}),
  ],
  controllers: [AuthControllerV1],
  providers: [
    AuthService,
  ],
  exports: [
    AuthService,
  ],
})
export class AuthModule {}
