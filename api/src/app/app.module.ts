import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { IcoPresaleModule } from './ico-presale/ico-presale.module';
import { AirdropController } from './airdrop/airdrop.controller';
import { AirdropService } from './airdrop/airdrop.service';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    IcoPresaleModule,
  ],
  controllers: [AppController, AirdropController],
  providers: [AppService, AirdropService],
})
export class AppModule {}
