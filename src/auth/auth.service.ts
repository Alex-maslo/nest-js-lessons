import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<User> {
    const user = this.userRepository.create(registerDto);
    return this.userRepository.save(user);
  }

  async login(loginDTO: LoginDTO): Promise<{ access_token: string }> {
    const user = await this.validateUser(loginDTO.username, loginDTO.password);
    const payload = { userId: user.id, username: user.username };
    const access_token = this.jwtService.sign(payload);
    return { access_token };
  }

  private async validateUser(
    username: string,
    password: string,
  ): Promise<User> {
    const user = await this.userRepository.findOneBy({ username });

    if (!user || !(await user.validatePassword(password))) {
      throw new UnauthorizedException('Invalid credentials.');
    }
    return user;
  }
}
