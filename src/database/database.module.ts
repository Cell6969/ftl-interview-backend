import { Global, Module } from '@nestjs/common';
import { DB } from './database';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { Meeting } from '../meeting/meeting';

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: DB,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        try {
          const datasource = new DataSource({
            type: 'mysql',
            host: configService.get<string>('MYSQL_HOST'),
            port: Number(configService.get<number>('MYSQL_PORT')),
            username: configService.get<string>('MYSQL_USERNAME'),
            password: configService.get<string>('MYSQL_PASSWORD'),
            database: configService.get<string>('MYSQL_DATABASE'),
            synchronize: false,
            migrations: [__dirname + '/migrations/*.{ts,js}'],
            entities: [Meeting],
          });
          await datasource.initialize();
          console.log('Database connected successfully');
          return datasource;
        } catch (error) {
          console.log('Error connection to database');
          throw error;
        }
      },
    },
  ],
  exports: [DB],
})
export class DatabaseModule {}
