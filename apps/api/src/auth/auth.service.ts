import { PrismaService } from '@larpcalendar/models';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { hash, verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { SigninDto, SignupDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtPayload } from './strategy';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ) {}

  async signup(signupDto: SignupDto) {
    try {
      const data = {
        email: signupDto.email,
        name: signupDto.name,
        hash: await hash(signupDto.password),
      };
      const user = await this.prisma.user.create({ data });
      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        } else {
          throw error;
        }
      } else {
        throw error;
      }
    }
  }

  async signin(signinDto: SigninDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: signinDto.email },
    });
    if (!user) {
      throw new ForbiddenException('Credentials incorrect 1');
    }
    const match = await verify(user.hash, signinDto.password);
    if (!match) {
      throw new ForbiddenException('Credentials incorrect 2');
    }

    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: string,
    email: string
  ): Promise<{ access_token: string }> {
    const payload: JwtPayload = {
      sub: userId,
      email,
    };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: this.config.get('JWT_SECRET'),
    });

    return { access_token: token };
  }
}
