import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetenciesModule } from './competencies/competencies.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'secret',
      database: 'my_database',
      autoLoadEntities: true, // Автоматично знаходитиме наші таблиці
      synchronize: true, // Автоматично створюватиме таблиці в базі (зручно для розробки)
    }),
    CompetenciesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
