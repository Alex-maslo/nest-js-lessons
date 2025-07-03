import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
  public readonly jwtSecret: string;
  public readonly accessTokenExpirationTime: number;
  public readonly refreshTokenExpirationTime: number;

  public readonly dbType: string;
  public readonly dbHost: string;
  public readonly dbPort: number;
  public readonly dbUsername: string;
  public readonly dbPassword: string;
  public readonly dbDatabase: string;

  constructor(private readonly configService: ConfigService) {
    this.jwtSecret = configService.get<string>(
      'JWT_SECRET',
      '634fad4be47e3b641ac451d13aba0fb7578ce569da378cf221f41eb8dec2426face6ba5ca5089bbb',
    );
    this.accessTokenExpirationTime = configService.get<number>(
      'ACCESS_TOKEN_EXPIRATION_TIME',
      600,
    );
    this.refreshTokenExpirationTime = configService.get<number>(
      'REFRESH_TOKEN_EXPIRATION_TIME',
      1200,
    );

    this.dbType = configService.get<string>('DB_TYPE', 'mysql');
    this.dbHost = configService.get<string>('DB_HOST', 'localhost');
    this.dbPort = configService.get<number>('DB_PORT', 3306);
    this.dbUsername = configService.get<string>('DB_USERNAME', 'user');
    this.dbPassword = configService.get<string>('DB_PASSWORD', 'userpassword');
    this.dbDatabase = configService.get<string>('DB_DATABASE', 'mydatabase');
  }
}
