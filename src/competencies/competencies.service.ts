import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompetencyDto } from './dto/create-competency.dto';
import { UpdateCompetencyDto } from './dto/update-competency.dto';
import { Competency } from './entities/competency.entity';

@Injectable()
export class CompetenciesService {
  constructor(
    @InjectRepository(Competency)
    private competenciesRepository: Repository<Competency>,
  ) {}

  create(createCompetencyDto: CreateCompetencyDto) {
    // Створюємо новий об'єкт і зберігаємо його в базу
    const newCompetency =
      this.competenciesRepository.create(createCompetencyDto);
    return this.competenciesRepository.save(newCompetency);
  }

  findAll() {
    // Дістаємо всі записи з таблиці
    return this.competenciesRepository.find();
  }

  findOne(id: number) {
    return this.competenciesRepository.findOneBy({ id });
  }

  async update(id: number, updateCompetencyDto: UpdateCompetencyDto) {
    // Оновлюємо запис у базі даних
    await this.competenciesRepository.update(id, updateCompetencyDto);
    // Повертаємо оновлений запис, щоб побачити результат
    return this.findOne(id);
  }

  async remove(id: number) {
    // Видаляємо запис за його ID
    await this.competenciesRepository.delete(id);
    return { message: `Компетенцію #${id} успішно видалено` };
  }
}
