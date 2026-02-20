import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetenciesService } from './competencies.service';
import { CompetenciesController } from './competencies.controller';
import { Competency } from './entities/competency.entity';

@Module({
  // Додаємо цей блок imports:
  imports: [TypeOrmModule.forFeature([Competency])],
  controllers: [CompetenciesController],
  providers: [CompetenciesService],
})
export class CompetenciesModule {}
