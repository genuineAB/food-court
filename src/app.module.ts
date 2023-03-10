import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AddonsController } from './addons/addons.controller';
// import { AddonsService } from '../../addons.service';
import { ObjectionModule } from 'nestjs-objection/dist';
import { Addon } from './addons/addon.models';
import { UserController } from './users/users.controller';
import { BrandsController } from './brands/brands.controller';
// import { CategoryController } from '../../categories.controller';
import { BrandsService } from './brands/brands.service';
import { UsersService } from './users/users.service';
// import { CategoriesService } from './categories/categories.service';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    ObjectionModule.forRoot({
      config: {
        client: 'pg',
        version: '5.7',
        useNullAsDefault: true,
        connection: {
          host: process.env.PG_HOST,
          user: process.env.PG_USER,
          password: process.env.PG_PASS,
          database: process.env.PG_DB,
        },
      },
    }),
    ObjectionModule.forFeature([Addon]),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, UserController, BrandsController],
  providers: [AppService, BrandsService, UsersService, AuthService, JwtService],
})
export class AppModule {}
