import { injectable } from 'tsyringe'
import { AgendaDto } from '../dto/agenda.dto'
import { AgendaRepository } from '../mocks/db'

@injectable()
export class AgendaService {
  // Mock de dados do banco de dados
  private dbData = AgendaRepository

  async findAllSchedules(): Promise<AgendaDto[]> {
    return this.dbData.medicos
  }
}
